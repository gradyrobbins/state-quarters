const eventListeners = {
    handleFormSubmission () {
        //capture input values from form:
        const creator = document.querySelector("#lego__creator").value;
        const name = document.querySelector("#lego__name").value;
        const color = document.querySelector("#lego__color").value;
        const shape = document.querySelector("#lego__shape").value;

        //create an object to represent a lego; see book4 chapter2 for template
        // Once you have collected all the values, build your data structure
    const legoObject = {
        creatorName: creator,
        legoName: name,
        legoColor: color,
        legoShape: shape
    }
    console.log("lego to save :" , legoObject)
    //post to API and pass legoToSave; use data module, call "postLego" method
    data.postLego(legoObject);
    // data.postLego(legoObject);

//clear form fields after data.postLego(legoObject) is called.
    document.querySelector("#lego__creator").value = "";
    document.querySelector("#lego__name").value = "";
    document.querySelector("#lego__color").value = "";
    document.querySelector("#lego__shape").value = "";


    }

};