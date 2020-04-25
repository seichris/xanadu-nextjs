function NavSection(props) {
  return (
    <nav class="flex flex-wrap items-center justify-between p-4"><div class="flex flex-shrink-0 mr-10"><a class="text-xl text-indigo-500 font-semibold" href="#"><img src="static/images/ethereum_castle_in_the_sky2.png" alt="Xanadu" width="50"/></a></div>
      <div class="block lg:hidden"><div class="divbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500"><svg class="fill-current h-3 w-3" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></div>    </div>
      <div class="divbar-menu hidden lg:flex lg:flex-grow lg:items-center w-full lg:w-auto">
        <div class="lg:mr-auto"><a class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="#">Why</a><a class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="#">How</a><a class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="#">Product</a><a class="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-blue-700" href="#">Product examples</a></div>
        <div><a class="block lg:inline-block mt-4 lg:mt-0 lg:mr-8 text-blue-900 hover:text-blue-700" href="#">Add note</a><a class="inline-block py-3 px-6 mt-4 lg:mt-0 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" href="#">Auth with Ethereum</a></div>
      </div>
    </nav>
  );
}

export default NavSection;
