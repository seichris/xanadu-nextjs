function HeroSection(props) {
  return (
    <section className="py-12 px-4">
      <div className="flex flex-wrap items-center text-center lg:text-left -mx-2">
        {/*<div className="lg:w-1/2 px-2">
          <img src="static/images/chongqing.jpg" alt=""/>
        </div>*/}
        <div className="lg:w-3/6 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none items-center text-center mx-auto">
          <div className="flex flex-row items-center -mx-8 mt-12 mb-2">
            <img src="static/images/eth.png" alt="Xanadu" width="50"/>
            <div>
              <h2 className="text-5xl mb-6 leading-tight font-heading">share your personal {"\n"} version of the web</h2>
              <h3 className="mb-6 leading-tight font-heading">Edit any website, just like a google doc, share it & get rewards</h3>
            </div>
          </div>

          {/*<p className="mb-4 text-gray-700 leading-relaxed">
            Xanadu lets anyone improve websites and share them—just like a google doc
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Good content gets rewarded (upvotes = money + priority + reputation + followers). Bad content gets disadvantaged (downvotes = - money - priority - reputation - blacklist).
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Allowing content creators to advertise where their potential users are. Allowing users to find content creators, at the source of related content.
            Enabling anyone to bookmark content and follow content creators.
          </p>*/}

          {/*<div>
            <a className="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" href="#">Sign up</a>
            <a className="text-blue-700 hover:underline" href="#">Learn more</a>
          </div>*/}
        </div>
      </div>
      <div className="items-center text-center my-24 -mx-2">
        <p className="mb-4 text-gray-700 ">
          What do you think about this proposition?
        </p>
        <a className="inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" href="#">
        Add your shitty opinion
        </a>
      </div>
    </section>
  );
}

export default HeroSection;

{/* DESIGN
  first, user can press the button

  then, they scroll down > which reveals comments all around the site

*/}
