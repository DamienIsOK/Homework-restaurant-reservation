module.exports.availability  = function (customerData) {
  if (customerData.length < 5) {
    return "You reserved a table!";
  } else {
    return "You're on the waiting list :(";
  }
}

module.exports.resetForm = function ($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox')
         .removeAttr('checked').removeAttr('selected');
}

