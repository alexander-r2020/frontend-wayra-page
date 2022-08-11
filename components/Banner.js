
const Banner = ({name}) => {
  return (
    <section>
      <style jsx>{`
          section{     
            padding:25rem 0;
            background-image:linear-gradient(to right, rgb(0 0 0 /.25), rgb( 0 0 0 / .5)),url(/img/banner/${name}.jpg);
            background-size:cover;
            background-position:40%;
          }

        `}</style>
    </section>
  );
};

export default Banner;
