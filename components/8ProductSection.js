function ProductSection(props) {
  return (
    <>
    <section class="py-12 px-4 text-center">
      <h2 class="text-4xl mb-4 font-heading">Product examples</h2>
      <p class="max-w-2xl mx-auto mb-12 text-gray-500 leading-relaxed">who can use this. how can use this......... hover one pic to open a text field, explaining examples</p>
      <div class="flex max-w-lg mx-auto mb-12 border-b-2">
        <div class="w-1/3 pb-2 border-b-4 border-indigo-500">
          <div>v1.0</div>
        </div>
        <div class="w-1/3 pb-2">
          <div>v2.0</div>
        </div>
        <div class="w-1/3 pb-2">
          <div>v3.0</div>
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
    </>
  );
}

export default ProductSection;
