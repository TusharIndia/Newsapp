import React, {useEffect,useState} from "react";
import NewsItem from "./child_component/NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // apikey="4bf1d7344ccb483587e7dcdbb90ccb12";
  // document.title = `${capitalizeFirstLetter(props.category)}-NewsTeller`;
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updatePage = async() => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
    props.setProgress(30);
    let data = await fetch(url);
    setLoading(true);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    setLoading(false);
    setTotalResults(parseData.totalResults);
    props.setProgress(100);
  }

  useEffect(() => {
    updatePage();
    //enlint disable-next-line
  }, [])


  const fetchMoreData = async () => {
      await setPage(page+1);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`;
      let data = await fetch(url);
      setLoading(true);
      let parseData = await data.json();
      setArticles(articles.concat(parseData.articles));
      setLoading(false);
      setTotalResults(parseData.totalResults);
  };

  
    let { mode } = props;
    return (
      // <div className={`d-flex justify-content-center`}>
      <>
        <br />
        <br />
        <br />
        {mode === "light" ? (
          <h2 className="text-center" style={{marginTop: "30px"}}>
            NewsTeller - Latest{" "}
            {capitalizeFirstLetter(props.category)} Headlines
          </h2>
        ) : (
          <h2 className="text-white text-center" style={{marginTop: "30px"}}>
            NewsTeller - Latest{" "}
            {capitalizeFirstLetter(props.category)} Headlines
          </h2>
        )}
        {loading && <Spinner />}
        <div>
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
          >
            <div className={`container text-center`}>
              <div className="row mt-5">
                {/* {console.log(totalResults)} */}
                {articles?.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title : "No Title"}
                        description={
                          element.description
                            ? element.description.slice(0, 100)
                            : "No Description"
                        }
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        time={element.publishedAt}
                        source={element.source.name}
                        mode={mode}
                      ></NewsItem>
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
}

News.defaultProps = {
  country: "in",
  pagesize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};



export default News;
