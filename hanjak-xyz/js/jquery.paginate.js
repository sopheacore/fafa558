/**
 * Paginate - jQuery Plugin
 * By Federico Cargnelutti <fedecarg@gmail.com>
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   - http://www.opensource.org/licenses/mit-license.php
 *   - http://www.gnu.org/licenses/gpl.html
 * 
 * Examples and documentation at: 
 *   - http://github.com/fedecarg/jquery-htmlpaginate
 * 
 * Usage:
 * 
 * <ul id="items">
 *     <li>Item 1</li>
 *     <li>Item 2</li>
 *     <li>Item 3</li>
 *     <li>Item 4</li>
 *     <li>Item 5</li>
 *     <li>Item 6</li>
 * </ul>
 * <div id="items-pagination" style="display:none">
 *     <a id="items-previous" href="#">&laquo; Previous</a> 
 *     <a id="items-next" href="#">Next &raquo;</a>
 * </div>
 *     
 * <script type="text/javascript">
 * $('#items').paginate({itemsPerPage: 2});
 * </script>
 * 
 */
(function($) {
    
$.fn.paginate = function(options) {
    
    var Paginator = function(self, options) {
        
        var defaults = {
            itemsPerPage: 10,
            selector: {
                last: self.selector+'-last',
                first:self.selector+'-first',
                next: self.selector+'-next',
                previous: self.selector+'-previous',
                pagination: self.selector+'-pagination',
                specific_page:self.selector+'-specific-page-num',
                nav_num:self.selector+'-page_active'
            },
            	cssClassName: {
                disabled: 'disabled'
            }
        }; 
        var options = $.extend(defaults, options);
        var currentPage = 1;
        var numberOfPages = 1;
        var numberOfItems = 0;
        var page_num = $("#record-pagin-specific-page-num");
        var order=$('#record-pagin-order').html(); 
        var amt=$('#record-pagin-amount').html();
        var firstLabel = '<a href="#" id="record-pagin-first"><<</a>';
        var prevLabel = '<a href="#" id="record-pagin-previous"><</a>';
        var nextLabel =' <a href="#" id="record-pagin-next">></a>';
        var lastLabel ='<a href="#" id="record-pagin-last">>></a>';
        var adjacents=4;
        var page=1;
         
        var init = function() { 
            numberOfItems = self.children().size();
            numberOfPages = Math.ceil(numberOfItems / options.itemsPerPage);
            if (numberOfPages > 1) {
                $(options.selector.pagination).show();
                $(options.selector.previous).addClass(options.cssClassName.disabled);
            }
           MinMax(page);

            self.children().hide();
            self.children().slice(0, options.itemsPerPage).show();
            
            $(document).on('click',options.selector.previous,function(e){
                e.preventDefault();
                previous();
                var order=$('#record-pagin-order').html();
                if(parseInt(order) >1){
                    var reduce= parseInt(order)-1;
                    $('#record-pagin-order').html(reduce);
                }
                 MinMax(currentPage);
            });
            $(document).on('click',options.selector.next,function(e){
                e.preventDefault();
                next();
                if(parseInt(order) <parseInt(amt)){
                    var plus= parseInt(order)+1;
                    $('#record-pagin-order').html(plus);
                }
                 MinMax(currentPage);
            });
             $(document).on('click',options.selector.last,function(e){
                e.preventDefault();
                last();
                MinMax(currentPage);
            });
            $(document).on('click',options.selector.first,function(e){
                e.preventDefault();
                first();
                MinMax(currentPage);
            });
            $(document).on('click','.record-pagin-page_active',function(e){
                e.preventDefault();
                currentPage = $(this).html();
                show(parseInt(currentPage));
                MinMax(currentPage);
            });
            $(options.selector.specific_page).on('keydown', function(event){
                var eventKeyCode = event.which;
                if(eventKeyCode==190){
                    return false;
                }
            }).on("input",function(e){
                var page_num = $(this).val();
                if(page_num == 0){
                    $(this).val("");
                }else{
                    var max_page = $("#record-pagin-amount").html();
                    if(parseInt(page_num) > parseInt(max_page)){
                        $(this).val(max_page);
                    }
                    e.preventDefault();
                    specificPage();
                }
            }); 
            
            self.show();
        }
        
        var show = function(page) {
            currentPage = page;
            startPage = (currentPage - 1) * options.itemsPerPage;
            endPage = startPage + options.itemsPerPage;
            self.children().hide().slice(startPage, endPage).show();

            var disabled = options.cssClassName.disabled; 
            $(options.selector.pagination + ' a').removeClass(disabled);
            if (currentPage <= 1) {console.log(options.selector.previous);
                $(options.selector.previous).addClass(disabled);
            } else if (currentPage == numberOfPages) {
                $(options.selector.next).addClass(disabled);
            }
        };
        var MinMax = function(page){
            var pageMin = (page > adjacents) ? (page - adjacents) : 1; 
            var pageMax = (page < (options.total_pages - adjacents)) ? (page + adjacents) : options.total_pages; 
            var page_content='';
            page_content+=firstLabel;
            page_content+=prevLabel; 
            var active = '';
            for(var i=pageMin;i<=pageMax;i++){
                if(page==i) {active = 'page_active'}else{active=''};
                page_content+='<a href="javascript:void(0)" style="color: #a94614;" class="record-pagin-page_active '+active+'">'+i+'</a>'; 
            } 
            page_content+=nextLabel
            page_content+=lastLabel;
            $('.pagination').html(page_content);
			$(".page_active").css("background","#f4ef58");
        }
        var first = function(){
            currentPage = 1;
            show(parseInt(currentPage));
        }
        var last = function(){
            currentPage = numberOfPages; console.log(currentPage);
             show(parseInt(currentPage));
        }
        var next = function() {
            if (currentPage < numberOfPages){
                show(parseInt(currentPage) + 1);
            }
            if(page_num.val()){
                page_num.val("");
            }
        };
        
        var previous = function() {
            if (currentPage > 1) {
                show(parseInt(currentPage) - 1);
            }
            if(page_num.val()){
                page_num.val("");
            }
        };
        var specificPage = function(){
            if($.isNumeric(page_num.val())){
                show(page_num.val());
                $('#record-pagin-order').html(page_num.val());
            }
        }
        
        init();
        return this;
    }
    
    return new Paginator(this, options);
};
})(jQuery);
$(function(){
	$(document).on("click", "#record-pagin a", function() {
		$(".loading").remove();
		$(".center-table").css("position","relative");
		$(".center-table table").css("opacity",".5");
		$(".center-table").append("<div class='loading' style='position: absolute;top: 50%;left: 50%;z-index: 99999;display: block;'><div id='preloader_pagin' style='position: absolute;top: 50% !important;left:50%;border: 6px solid #106eea;border-top-color: #e2eefd;border-radius: 50%;width: 60px;height: 60px;-webkit-animation: animate-preloader 1linear infinite;animation: animate-preloader 1s linear infinite;margin-left: 30px;margin-top: 30px;'></div></div>");
		setTimeout(function(){$(".loading").css("display","none");$(".center-table table").css("opacity","1");}, 200);
    });
});
insertCss(
	".paginate_button.first{ background: none !important;display: inline !important;}.pagination.page{display: inline-block !important;}@-webkit-keyframes animate-preloader {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}"
)
function insertCss(code) {
    var style = document.createElement('style');
    style.type = 'text/css';
    if(style.styleSheet) {// IE
        style.styleSheet.cssText = code;
    }else {
        // Other browsers
		style.innerHTML = code;
    }
    document.getElementsByTagName("head")[0].appendChild(style);
}