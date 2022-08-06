exports.removeSpaces = (objOfForm) => {
    for(i in objOfForm){
        objOfForm[i] = objOfForm[i].trim();
    }
    return objOfForm;
}

exports.checkFieldIsEmpty = (field) => {
    if (field == "" || field == undefined || field == null){
        return true;
    }
    return false
}

exports.validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };