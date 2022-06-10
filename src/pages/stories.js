import Story from "./story";
import DatafromApi from "../backendAPI/fetchData";

const Stories = (props) => {
  const { isLoading, stories } = DatafromApi(props.type);

  return (
    <div>
      {isLoading ? (
     <div className="loading"></div>
      ) : (
        <>
          {Object(stories).map(({ data } = stories, id) => (
            <Story key={id} contentId={id} story={data} />
          ))}
        </>
      )}
    </div>
  );
};

export default Stories;
