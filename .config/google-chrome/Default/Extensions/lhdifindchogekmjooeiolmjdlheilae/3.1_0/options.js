function save_options() {
	var s = parseInt(document.getElementById('size').value);
	var h = parseInt(document.getElementById('height').value);
	var e = document.getElementById('font_selector');
	var selector_index = e.selectedIndex;
	var font_selection = e.options[selector_index].text;
	chrome.storage.sync.set({
		textSize: s,
		lineHeight: h,
		font: font_selection,
		selected_item: selector_index,
		}, function() {
	});
}

function restore_options() {
	chrome.storage.sync.get({
	textSize: '130',
	lineHeight: '190',
	selected_item: 4,
	}, function(items) {
		document.getElementById('size').value = items.textSize;
		document.getElementById('sizeValue').innerHTML = items.textSize + '%';

		document.getElementById('height').value = items.lineHeight;
		document.getElementById('heightValue').innerHTML = items.lineHeight + '%';

		document.getElementById('font_selector').selectedIndex = items.selected_item;
	});
}

function updateSize() {
	document.getElementById('sizeValue').innerHTML = document.getElementById('size').value + '%';
}

function updateHeight() {
	document.getElementById('heightValue').innerHTML = document.getElementById('height').value + '%';
}

document.addEventListener('DOMContentLoaded', restore_options);

document.getElementById('size').addEventListener('mouseup', save_options);
document.getElementById('size').addEventListener('mousemove', updateSize);

document.getElementById('height').addEventListener('mouseup', save_options);
document.getElementById('height').addEventListener('mousemove', updateHeight);

document.getElementById('font_selector').addEventListener('change', save_options);