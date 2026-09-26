 // Selecteer alle vakken met querySelectorAll als houvast
// Loop met een for of loop door elk vak en voeg aan elk vak een click-event 
// toe dat de klasse 'active' wisselt

// 1. Select all elements with class "box" and store them in a NodeList
//    (a NodeList is array-like: you can loop over it, but it's not a full Array)
const boxs = document.querySelectorAll('.box')

// 2. Loop through every box, one at a time
//    IMPORTANT: using "let" here creates a NEW "box" variable for each pass
//    of the loop. This matters because each click listener below will
//    "remember" its own specific box, not just the last one in the list.
for (let box of boxs){
      // 3. Give THIS box its own click listener.
    //    The function below only runs later, when the user actually clicks —
    //    but thanks to closures, it still knows exactly which "box" it belongs to.
    box.addEventListener('click', () => {
          // 4. When ANY box is clicked: first reset ALL boxes.
        //    Loop through every box in the list and remove the "active" class,
        //    so no box is marked as selected anymore.
      for (let anderebox of boxs){
        anderebox.classList.remove('active')
      }

        // 5. THEN mark only the box that was actually clicked as active.
        //    Because step 4 already cleared everyone, this is now the
        //    only box with the "active" class.
 box.classList.add('active')

})}
   