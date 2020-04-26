function ProblemSection(props) {
  return (
    <>
      <section className="p-4">
        <h2 className="text-4xl mb-12 leading-tight font-heading text-center">how to gather knowledge, when starting to building Ethereum products?</h2>
        <h2 className="text-xl mb-12 leading-tight font-heading text-center">put this as tabs down in 'products'. and add the full version to dev,to</h2>
        <div className="flex flex-wrap">
          <div className="md:w-1/2 py-4 md:px-10 mb-4 md:mb-0">
            <img className="mx-auto mb-3" src="static/images/people/experts.png" alt=""/>
            {/*
              THE EXPERT

              put together images from

              prosytethis
              vitalik
              twitter icon
              reddit icon
              weekinethereum icon or evan
              ...
            */}
            <h3 className="text-2xl mb-3 font-heading text-center">the experienced wants reward for sharing</h3>
            <p className="text-gray-500 leading-relaxed text-center">
              He's been working in Ethereum for a year, using DApps daily.
              {/*
                with reddit karma? with twitter likes? with traffic to his product website? no. we build a universal reputation...
                why || user, community needs || problems || goals text text
                Experienced Ethereum community members want to share their knowledge in exchange for reputation or $.
              */}
            </p>

            <h3 className="font-semibold mb-3 mt-8 font-heading">needs, goals</h3>
            <p className="mb-4">
              He shares ideas on twitter. Shares his code on github. Receives positive feedback, but does not get paid.
              <ul className="list-disc">
                <li>Wish he could share to a list of friends</li>
                <li>Wish he could monetize access to that list, like a paid twitter account</li>
                <li>Wants more twitter followers</li>
                <li>Wants measurable reputation as helpful community member</li>
              </ul>
            </p>

            <h3 className="font-semibold mb-3 mt-8 font-heading">current problems</h3>
            <p className="mb-4">
              asdasdasd
              <ul className="list-decimal">
                <li>asdasd.</li>
                <li>asdasd</li>
              </ul>
            </p>

          </div>

          {/*
            THE NEWB
          */}
          <div className="md:w-1/2 py-4 md:px-10 mb-4 md:mb-0 md:border-l">
            <img className="mx-auto mb-3" src="static/images/people/newbs.png" alt=""/>
            <h3 className="text-2xl mb-3 font-heading text-center">the web3 newbie needs mentorship</h3>
            <p className="text-gray-500 leading-relaxed text-center">
              She works at web2.com & is starting an Ethereum DApp side project.
            </p>

            <h3 className="font-semibold mb-3 mt-8 font-heading">needs, goals</h3>
            <p className="mb-4">
              She has a rough idea what to build, but its hard to get an overview on related content.
              <ul className="list-disc">
                <li>Which projects build similar stuff?</li>
                <li>Who can guide me?</li>
                <li>Where to ask questions?</li>
                <li>Where to follow the most recent news?</li>
                <li>Is that code secure?</li>
                <li>Can I trust that team to maintain their code?</li>
              </ul>
            </p>

            <h3 className="font-semibold mb-3 mt-8 font-heading">current problems</h3>
            <p className="mb-4">
              right now, there are two ways to find information
              <ul className="list-decimal">
                <li>search your way through google, reddit, stackoverflow, etc.</li>
                <li>or follow a guide on social media</li>
              </ul>
            </p>
            <p className="mb-4">
              search is focused on content, but monetizing content = ads.
            </p>
            <p className="mb-4">
              social gives you guiding experts, but also continuous noise. No universal reputation.
            </p>

          </div>
        </div>
      </section>

    </>
  );
}

export default ProblemSection;
