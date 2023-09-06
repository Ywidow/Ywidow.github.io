const itemsFromList = document.getElementsByClassName('tbody__tr');

for(let i = 0; i < itemsFromList.length; i++){
  itemsFromList[i].addEventListener(
    'click', function(){
      const editScreen = document.getElementsByClassName('section__edit-item');
      const main = document.getElementsByTagName('main');

      main[0].style.display = "none";

      editScreen[0].style.display = "block";
    }
  );

}

const cancelButton = document.getElementById('cancel-button');

cancelButton.addEventListener(
  'click', function(){
    const editScreen = document.getElementsByClassName('section__edit-item');
    const main = document.getElementsByTagName('main');

    main[0].style.display = "flex";

    editScreen[0].style.display = "none";
  }
);