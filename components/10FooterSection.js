function ProductSection(props) {
  return (
    <footer class="flex flex-wrap items-center justify-between p-4"><div class="w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center">&copy; 2020 Xanadu</div>
      <div class="flex flex-col lg:flex-row items-center w-full lg:w-auto">
        <div class="mx-auto lg:mx-0 lg:ml-auto"><a class="inline-block mt-0 text-blue-900 hover:text-blue-700" href="#">FAQ</a><a class="inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700" href="#">Github</a><a class="inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700" href="#">Discord</a></div>
        <div class="flex justify-center mt-4 lg:mt-0 lg:ml-8"><img class="w-6 h-6 mr-6" src="static/placeholders/icons/message.svg" alt=""/><img class="w-6 h-6" src="static/placeholders/icons/share.svg" alt=""/></div>
      </div>
    </footer>
  );
}

export default ProductSection;
