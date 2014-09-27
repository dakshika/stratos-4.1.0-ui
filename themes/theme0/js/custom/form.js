// Variable to store the current mode of input
var isForm = true;

// Finding the height of the rendered form, and setting the JSON
// editor to the same height
var formHeight = $('#textform').height();
$('#jsoneditor').css('height', formHeight);

// Variable to store height of the title text
var titleHeight = $('#centered').height() - $('#content').height();

/**
 * Function to change the animate the change in height of the box
 */
function changeBoxHeight () {
	window.setTimeout(function () {
		var newContentHeight = $('#content').height();
		var newHeight = titleHeight + newContentHeight;
		$('#centered').animate({
			'height': newHeight
		}, 400);
	}, 350);
}

// Binding functions to collapsed box opening and closing
$('.subform').on('hidden.bs.collapse', changeBoxHeight);
$('.subform').on('shown.bs.collapse', changeBoxHeight);



/**
 * Function to change the css display mode of the elements
 * @param  {String} element1 Element identifier #1 (this is the element that is hidden)
 * @param  {String} element2 Element identifier #1 (this is the element that is shown)
 */
function changeDisplayMode (element1, element2) {
	$(element1).css('display', 'none');
	$(element2).css('display', 'inline');
}

/**
 * Handling editor view switching
 */
var jsonSkeleton;
var currentJson;

/**
 * Function to update the current JSON
 * view from the text form
 */
function updateJsonView () {

	/**
	 * Function to update a field in the
	 * JSON version of the form
	 * @param  {String} current   Current key to be updated
	 * @param  {Array}  remaining Hieracial path to the final value to be updated
	 */
	function updateJsonField (name, value, type, current, remaining) {
		if (remaining.length === 1) {
			if (typeof(current) != 'Array') {
				current[name] = value;
			}
		} else {
			updateJsonField(name, value, type, current[remaining.pop()], remaining);
		}
	}

	$('#textform :input').each(function () {
		var currentInputField = $(this);
		var currentInput = currentInputField.val();
		if (currentInput != '') {
			var currentId = currentInputField.attr('data-path');
			var name = currentId.split('.').pop();
			var jsonPath = currentId.split('.').reverse();
			var current;
            console.log(jsonPath)
			if (jsonPath.length > 1) {
				current = currentJson[jsonPath.pop()];
			} else {
				current = currentJson;
			}
			updateJsonField(name, currentInput, 'blah', current, jsonPath);
		}
	});
	// Stringifying and prettifying json, then placing it in the editor
	$('#jsoneditor').text(JSON.stringify(currentJson, null, '\t'));
}



/**
 * Function to update the current form
 * from the JSON
 */
function updateFormView () {
	try {
		var jsonText = $('#jsoneditor').val();
		var parsedJsonText = eval('(' + jsonText + ')');
		currentJson = parsedJsonText;
	} catch (e) {
		alert('Invalid JSON');
		return false;
	}
	return true;
}



$(document).ready(function() {
    $('#list').click(function(event){
        event.preventDefault();
        $('.general-table .block').addClass('list-group-item');
        $('.general-table .block').removeClass('grid-group-item');
    });
    $('#grid').click(function(event){
        event.preventDefault();
        $('.general-table .block').removeClass('list-group-item');
        $('.general-table .block').addClass('grid-group-item');
    });
});


/**
 * Function to handle hiding and showing the JSON form
 */
$('#editortoggle').click(function () {
    if (isForm) {
        //updateJsonView();
        formToJSON();
        changeDisplayMode('#textform', '#jsonform');
        $('#editortoggle').text('Form View');
        isForm = false;
        changeBoxHeight();
    } else {
        if (updateFormView()) {
            changeDisplayMode('#jsonform', '#textform');
            $('#editortoggle').text('JSON Editor');
            isForm = true;
            changeBoxHeight();
        }
    }
});

var currentJSON = JSON.parse($('#jsoneditor').val());
function formToJSON(){

    console.log(currentJSON);
    $('#textform :input').each(function () {
        var currentInputField = $(this);
        var currentInput = currentInputField.val();
        if (currentInput != '') {
            var currentDataPathRaw = currentInputField.attr('data-path').slice(0,-1);
            var currentDataPath = currentDataPathRaw.split('.');
            console.log(currentDataPath);
            if (currentDataPath.length == 2) {
                currentJSON[currentDataPath[0]][currentDataPath[1]] = currentInput;
            }else if (currentDataPath.length == 3) {
                currentJSON[currentDataPath[0]][currentDataPath[1]][currentDataPath[2]] = currentInput;
            }else if (currentDataPath.length == 4) {
                currentJSON[currentDataPath[0]][currentDataPath[1]][currentDataPath[2]][currentDataPath[3]][currentDataPath[4]] = currentInput;
            }else{
                currentJSON[currentDataPathRaw] = currentInput;
            }

        }

    });
   console.log(currentJSON);
    // Stringifying and prettifying json, then placing it in the editor
    $('#jsoneditor').text(JSON.stringify(currentJSON, null, 4));
}

