function BenefitsSection(props) {
  return (
    <section className="py-12 px-4 text-center">
      {/*<h2 className="text-4xl mb-2 leading-tight font-heading">...so we match these two sites, exactly where they now dont meet. this is how it works...</h2>
      <p className="text-gray-500">click the div to auth with ethereum and open your first note</p>*/}
      <div className="flex flex-wrap items-center -mx-8 mt-12 mb-2 font-mono">
        <div className="lg:w-1/4 px-8 mb-8">
          {/*<img className="w-1/2 mx-auto mb-8" src="static/images/flow/create.png" alt=""/>
          <h3 className="text-2xl mb-2 font-heading">
          <span className="inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full">1 </span>
          <span>Edit the web</span></h3>*/}
          <p className=" mb-2">
          personalized content
          </p>
        </div>
        <div className="lg:w-1/4 px-8 mb-8">
          {/*<img className="w-1/2 mx-auto mb-8" src="static/images/flow/share.png" alt=""/>
          <h3 className="text-2xl mb-2 font-heading">
          <span className="inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full">2 </span>
          <span>Share it</span></h3>*/}
          <p className=" mb-2">
          data privacy
          </p>
        </div>
        <div className="lg:w-1/4 px-8 mb-8">
          <p className=" mb-2">
          rewards on the blockchain
          </p>
        </div>
        <div className="lg:w-1/4 px-8 mb-8">
          <p className=" mb-2">
          interoperable
          </p>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
