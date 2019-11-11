function itemListButton(text, value) {
    this.text = text;
    this.value = value;
}
 
function listButton(id, value, width, height, widthList, heightList) {
    this.id = id;
    this.value = value;
    this.width = width;
    this.height = height;
    this.widthList = widthList;
    this.heightList = heightList;
    this.items = [];
 
    this.objDiv;
    this.isOpen;
 
    this.openListheight;
 
    this.OnSelectedIndexChanged;
}

listButton.prototype.addItem = function (text, value) {
    var oItemListButton = new itemListButton(text, value);
 
    this.items[this.items.length] = oItemListButton;
};
 
listButton.prototype.removeItem = function (index) {
    this.items.splice(index, 1);
};
 
listButton.prototype.clearItem = function () {
    this.items = [];
};
 
listButton.prototype.getItem = function (index) {
    return this.items[index];
};
 
listButton.prototype.item_MouseOver = function (obj) {
    obj.style.backgroundColor = "#FFE6A0";
};
 
listButton.prototype.item_MouseOut = function (obj) {
    obj.style.backgroundColor = '';
};
 
listButton.prototype.openList = function () {
    if (this.openListheight < parseInt(this.heightList)) {
        this.openListheight += 20;
 
        this.objDiv.style.height = this.openListheight;
 
        setTimeout(this.id + ".openList()", 5);
    }
    else {
        this.objDiv.style.height = this.heightList;
    }
}
 
listButton.prototype.closeList = function () {
    this.openListheight -= 20;
 
    if (this.openListheight > 0) {
        this.objDiv.style.height = this.openListheight;
 
        setTimeout(this.id + ".closeList()", 5);
    }
    else {
        this.objDiv.style.height = this.heightList;
        this.objDiv.style.display = 'none';
    }
}

listButton.prototype.item_Click = function (obj) {
    this.openListheight = parseInt(this.heightList);
    this.closeList();
 
    this.isOpen = false;
 
    var index = parseInt(obj.attributes['indexItem'].value);
 
    if (this.OnSelectedIndexChanged != null) {
        this.OnSelectedIndexChanged(this.items[index]);
    }
};
 
listButton.prototype.objButton_OnClick = function (objPosition) {
    if (!this.isOpen) {
        this.objDiv.style.display = 'block';
 
        this.objDiv.style.top = (objPosition.offsetTop + parseInt(this.height));
        this.objDiv.style.left = objPosition.offsetLeft;
        this.objDiv.style.height = 0;
 
        this.openListheight = 0;
        this.openList();
 
        this.isOpen = true;
    }
    else {
        this.openListheight = parseInt(this.heightList);
        this.closeList();
 
        this.isOpen = false;
    }
};

listButton.prototype.createButton = function (objRecipient) {
    var objImgPosition = document.createElement('IMG');
 
    objImgPosition.style.position = 'absolute';
    objImgPosition.style.visibility = 'hidden';
 
    var objButton = document.createElement('INPUT');
 
    objButton.value = this.value;
    objButton.style.width = this.width;
    objButton.style.height = this.height;
    objButton.className = 'buttonAp';
    objButton.type = 'button';
 
    var self = this;
    objButton.onclick = function () { self.objButton_OnClick(objImgPosition); }
 
    this.objDiv = document.createElement('DIV');
 
    this.objDiv.style.position = 'absolute';
    this.objDiv.style.left = 0;
    this.objDiv.style.top = 1;
    this.objDiv.style.width = this.widthList;
    this.objDiv.style.height = this.heightList;
    this.objDiv.style.display = 'none';
    this.objDiv.style.overflow = 'auto';
    this.objDiv.className = 'listButton';
 
    var objTable = document.createElement('TABLE');
    var objTBody = document.createElement('TBODY');
 
    objTable.style.width = '100%';
 
    for (var index = 0; index < this.items.length; index++) {
        var objTr = document.createElement('TR');
        var objTd = document.createElement('TD');
 
        objTd.className = 'fontItemListButton';
        objTd.innerHTML = this.items[index].text;
        objTd.setAttribute('indexItem', index);
 
        objTd.onmouseover = function () { self.item_MouseOver(this); }
        objTd.onmouseout = function () { self.item_MouseOut(this); }
        objTd.onclick = function () { self.item_Click(this); }
 
        objTr.appendChild(objTd);
        objTBody.appendChild(objTr);
    }
 
    objTable.appendChild(objTBody);
    this.objDiv.appendChild(objTable);
 
    objRecipient.appendChild(this.objDiv);
    objRecipient.appendChild(objImgPosition);
    objRecipient.appendChild(objButton);
};