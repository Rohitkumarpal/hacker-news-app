import  Story from '../components/organisms/Story'
import DatafromApi from "../backendAPI/fetchData";
import Loader from '../components/atoms/Loader';

const Stories = (props) => {
  const { isLoading, stories } = DatafromApi(props.type);

  return (
    <div>
      {isLoading ? (
     <Loader></Loader>
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
