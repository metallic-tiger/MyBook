var that = NaN;
class Pad{
 constructor(id){
    that = this;
    this.hover = 0;
    this.main = document.querySelector(id);
    this.Tag = this.main.querySelector('#Tag').querySelectorAll('li');
    this.Page = this.main.querySelector('#Page').querySelectorAll('li');
    console.log(this.list);
 }
 init(){
    for(var i = 0 ;i<this.Tag.length-1 ; i++){
        this.Tag[i].index = i;
        this.Tag[i].onclick = this.toggleTab;
        this.Tag[i].querySelector('.TagDel').onclick = this.removeTag;
        this.Tag[i].querySelector('span').ondblclick = this.edtion;
    }
    //AddTag
    this.Tag[this.Tag.length-1].onclick = this.addTag ;

    //Page
    for(var i = 0 ;i<this.Page.length-1 ; i++){
        this.Page[i].index = i;
    }
 }
 update(){
    this.Tag = this.main.querySelector('#Tag').querySelectorAll('li');
    this.Page = this.main.querySelector('#Page').querySelectorAll('li');
 }
 clearClass(){
     //Tag
    for(var i = 0 ;i<this.Tag.length-1 ; i++){
        this.Tag[i].setAttribute("class","tag tag-off")
    }
    
    //Page
    for(var i = 0 ;i<this.Page.length ; i++){
        this.Page[i].setAttribute("class","page page-off")
    }
 }
 //切换
 toggleTab(){
    that.clearClass();
    this.setAttribute("class","tag");
    that.Page[this.index].setAttribute("class","page");
    that.hover = this.index;
 }

 //添加
 addTag(){
     that.clearClass()
    //创建新 tag 与 page
    var tag = '<li class="tag ">未定义<div class="TagDel">x</div></li>';
    var Page = '<li class="page">空内容</li>';
    //添加 创建的内容到 页面中
    that.main.querySelector('#Tag').insertAdjacentHTML('afterBegin',tag);
    that.main.querySelector('#Page').insertAdjacentHTML('afterBegin',Page);
    //给他添加新的事件
    that.update()
    that.init()
 }

 removeTag(e){
     e.stopPropagation();
     var index = this.parentNode.index;
     console.log(index);
     that.Tag[index].remove();
     that.Page[index].remove();
     that.clearClass()
     that.update()
     that.init()
    if(that.hover >= (that.Tag.length-1)){
        that.hover = 0;
        that.Tag[that.hover].setAttribute("class","tag");
        that.Page[that.hover].setAttribute("class","page");
    }
    else{
        that.Tag[that.hover].setAttribute("class","tag");
        that.Page[that.hover].setAttribute("class","page");
    }
    
    
 }

 edtion(){
    window.getSelection ? window.getSelection().removeAllRanges() :document.Selection.empty();
    var Tag = this.innerHTML;
    this.innerHTML = "<input class='Tag-input' type='text'/>";
    var input = this.children[0]
    input.value = Tag;
     
    input.select();
    input.onblur = function(){
        this.parentNode.innerHTML = input.value;
    }
    input.onkeyup = function(e){
        console.log(e.keyCode);
        if(e.keyCode == 13){
            this.blur();
        }
        
    }
 }

}