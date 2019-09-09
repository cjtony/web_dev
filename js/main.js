var words = ['Explora!','Paginas web', 'Apps moviles', 'Software', 'Consultoria'],
    wordWrapper = document.getElementById('word'),
    wordWrapperContent = wordWrapper.innerHTML,
    addingWord = false,
    counter = 1;

setInterval(function(){

  if(wordWrapperContent.length > 0 && !addingWord ) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    addingWord = true;
  }

  if( addingWord ){
    if( wordWrapperContent.length < words[counter].length  ) {
      wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if( counter < words.length) {
        counter ++
      }
      addingWord = false;
    }
  }

  if( counter == words.length) {
    counter = 0;
  }

}, 150);

smoothScroll.init({
  selector: '[data-scroll]',
  selectorHeader: null,
  speed: 1000,
  easing: 'easeInOutCubic',
  offset: 0,
  callback: function ( anchor, toggle ) {}
});

// $(function (){
//   $(window).scroll(function(){
//      if ($(this).scrollTop() > 100) {
//       $('.nav-cam').addClass("is-primary");
//      } else {
//       $(".nav-cam").removeClass("is-primary");
//      }
//   });
// });