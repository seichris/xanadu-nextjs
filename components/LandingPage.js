//import React from "react";

function LandingPage(props) {
  return (
    <div class="container mx-auto px-4">

      <nav class="flex flex-wrap items-center justify-between p-4"><div class="flex flex-shrink-0 mr-10"><a class="text-xl text-indigo-500 font-semibold" href="#"><img src="static/images/ethereum_castle_in_the_sky2.png" alt="Xanadu" width="50"/></a></div>
        <div class="block lg:hidden"><div class="divbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500"><svg class="fill-current h-3 w-3" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></div>    </div>
        <div class="divbar-menu hidden lg:flex lg:flex-grow lg:items-center w-full lg:w-auto">
          <div class="lg:mr-auto"><a class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="#">Why</a><a class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="#">How</a><a class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="#">Product</a><a class="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-blue-700" href="#">Product examples</a></div>
          <div><a class="block lg:inline-block mt-4 lg:mt-0 lg:mr-8 text-blue-900 hover:text-blue-700" href="#">Add note</a><a class="inline-block py-3 px-6 mt-4 lg:mt-0 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" href="#">Auth with Ethereum</a></div>
        </div>
      </nav>

      <section class="py-12 px-4"><div class="flex flex-wrap items-center text-center lg:text-left -mx-2">
          <div class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
            <h2 class="text-5xl mb-6 leading-tight font-heading">incentivising eth devs to share knowledge, exactly where its needed</h2>
            <p class="mb-8 text-gray-500 leading-relaxed">why || user, community needs || problems || goals text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>
            <div><a class="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" href="#">Sign up</a><a class="text-blue-700 hover:underline" href="#">Learn more</a></div>
          </div>
          <div class="lg:w-1/2 px-2"> <img src="static/images/chongqing.jpg" alt=""/></div>
        </div>
      </section>

      <section class="p-4"><div class="flex flex-wrap text-center">
          <div class="md:w-1/2 py-4 md:px-10 mb-4 md:mb-0"><img class="mx-auto mb-3" src="static/placeholders/icons/shield.svg" alt=""/><h3 class="text-2xl mb-3 font-heading">the experienced community member \\ publisher</h3>
            <p class="text-gray-500 leading-relaxed">they want ... need...</p>
          </div>
          <div class="md:w-1/2 py-4 md:px-10 mb-4 md:mb-0 md:border-l"><img class="mx-auto mb-3" src="static/placeholders/icons/cloud-tools.svg" alt=""/><h3 class="text-2xl mb-3 font-heading">the web3 newbie</h3>
            <p class="text-gray-500 leading-relaxed">they want ... need...</p>
          </div>
        </div>
      </section>

      <section class="py-8 px-4"><div class="flex flex-wrap">
          <div class="md:w-1/2 py-4 md:px-16 mb-4 md:mb-0"><img class="w-24 mb-4" src="static/placeholders/logos/realweb.svg" alt=""/><p class="mb-4">motivation \\ why \\ reason \\ theory 1................................. ......................................... text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
            <p class="text-sm font-semibold">Christian Lackawanna</p>
            <p class="text-sm text-gray-500">CEO at Realweb</p>
          </div>
          <div class="md:w-1/2 py-4 md:px-16 mb-4 md:mb-0 md:border-l"><img class="w-24 mb-4" src="static/placeholders/logos/plucky.svg" alt=""/><p class="mb-4">motivation \\ why \\ reason \\ theory 2................................. ......................................... text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
            <p class="text-sm font-semibold">Barbara Allen</p>
            <p class="text-sm text-gray-500">CFO at Plucky</p>
          </div>
        </div>
      </section>

      <section class="py-12 px-4 text-center"><h2 class="text-4xl mb-2 leading-tight font-heading">so we match these two sites, exactly where they now dont meet. this is how it works...</h2>
        <p class="text-gray-500">click the div to auth with ethereum and open your first note</p>
        <div class="flex flex-wrap items-center -mx-8 mt-12 mb-2">
          <div class="lg:w-1/3 px-8 mb-8"><img class="w-1/2 mx-auto mb-8" src="static/images/fu-chenqi-.jpg" alt=""/><h3 class="text-2xl mb-4 font-heading"><span class="inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full">1 </span><span>open notes</span></h3>
            <p class="text-gray-500">text text text text text text text text text text text text text text text text text text text text </p>
          </div>
          <div class="lg:w-1/3 px-8 mb-8"><img class="w-1/2 mx-auto mb-8" src="static/images/fu-chenqi-1.jpg" alt=""/><h3 class="text-2xl mb-4 font-heading"><span class="inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full">2 </span><span>share notes</span></h3>
            <p class="text-gray-500">text text text text text text text text text text text text text text text text text text text text </p>
          </div>
          <div class="lg:w-1/3 px-8 mb-8"><img class="w-1/2 mx-auto mb-8" src="static/images/ghost_in_the_shell.jpg" alt=""/><h3 class="text-2xl mb-4 font-heading"><span class="inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full">3 </span><span>get rewarded</span></h3>
            <p class="text-gray-500">text text text text text text text text text text text text text text text text text text text text </p>
          </div>
        </div>
        <div><a class="inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" href="#">Add a message to this site</a></div>
      </section>

      <section class="py-12 px-4 text-center"><h2 class="text-4xl mb-4 font-heading">Product examples</h2>
        <p class="max-w-2xl mx-auto mb-12 text-gray-500 leading-relaxed">who can use this. how can use this......... hover one pic to open a text field, explaining examples</p>
        <div class="flex max-w-lg mx-auto mb-12 border-b-2">
          <div class="w-1/3 pb-2 border-b-4 border-indigo-500">
            <div>All</div>
          </div>
          <div class="w-1/3 pb-2">
            <div>Dev</div>
          </div>
          <div class="w-1/3 pb-2">
            <div>Media</div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 -mb-8">
          <div class="hidden md:block md:w-1/2 px-4 mb-8">
            <div class="h-full w-full bg-cover rounded shadow-md big-background-image"></div>
          </div>
          <div class="h-auto md:w-1/2 px-4 mb-8">
            <div class="mb-8"><img class="rounded shadow-md" src="static/images/chongqing.jpg" alt=""/></div>
            <div><img class="rounded shadow-md" src="static/images/shanghai_3.jpg" alt=""/></div>
          </div>
        </div>
      </section>

      <section class="py-12 px-4"><div class="flex flex-wrap -mx-4">
          <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div class="flex flex-col h-full p-8 bg-gray-200 rounded">
              <h2 class="text-3xl font-heading">Use this textbox in the above div</h2>
              <p class="max-w-sm mt-auto mb-8 text-gray-500 leading-relaxed">text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p><a class="text-right text-blue-700 hover:underline" href="#">View link to github repo</a>
            </div>
          </div>
          <div class="lg:w-1/2 px-4">
            <div class="flex flex-wrap -m-2">
              <div class="w-1/2 p-2"><img class="rounded shadow-md" src="static/images/hongkong_1.jpg" alt=""/></div>
              <div class="w-1/2 p-2"><img class="rounded shadow-md" src="static/images/Kronental-France-housing-projects.jpg" alt=""/></div>
              <div class="w-1/2 p-2"><img class="rounded shadow-md" src="static/images/bladerunner.jpg" alt=""/></div>
              <div class="w-1/2 p-2"><img class="rounded shadow-md" src="static/images/fu-chenqi-.jpg" alt=""/></div>
            </div>
          </div>
        </div>
      </section>

      <footer class="flex flex-wrap items-center justify-between p-4"><div class="w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center">&copy; 2020 Xanadu</div>
        <div class="flex flex-col lg:flex-row items-center w-full lg:w-auto">
          <div class="mx-auto lg:mx-0 lg:ml-auto"><a class="inline-block mt-0 text-blue-900 hover:text-blue-700" href="#">FAQ</a><a class="inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700" href="#">Github</a><a class="inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700" href="#">Discord</a></div>
          <div class="flex justify-center mt-4 lg:mt-0 lg:ml-8"><img class="w-6 h-6 mr-6" src="static/placeholders/icons/message.svg" alt=""/><img class="w-6 h-6" src="static/placeholders/icons/share.svg" alt=""/></div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
