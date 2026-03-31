function isNumberKey1(evt, id)
{
    var charCode = (evt.which) ? evt.which : event.keyCode;
    var rnd_val1 = document.getElementById(id).value;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
    {
        return false;
    }
}
document.onkeydown=function(event){
     var e = event || window.event || arguments.callee.caller.arguments[0];
     if(e && e.keyCode==13){ 
         send_bets();
      }
}
function send_bets(){
    var betDIV=document.getElementById("betting_box");
    if(betDIV.style.display==""||betDIV.style.display=="block"){send_bet();}
}
function isNumberKey2(evt, id)
{
    var charCode = (evt.which) ? evt.which : event.keyCode;
    var rnd_val1 = document.getElementById(id).value;

    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46)
    {
        return false;
    }
    var xxx = 0;
    for(i = 0; i<rnd_val1.length;i++)
    {
        if(rnd_val1[i]==".")
        {
            xxx++;
        }
    }
    if(xxx>0)
    {
        if(charCode == 46)
        {
            return false;
        }
    }

}
function get_real_amount_keno()
{
    var playtype = document.getElementById("play_type").value;

    var x = document.getElementById('bet_amount').value;
    var get_disc = document.getElementById('discount_'+playtype).value;
    if(x == ""){
        x=0;
    }
        
    var disc_amount = (parseFloat(x) * parseFloat(get_disc)/100);
    var bet_after_disc = parseFloat(x) - parseFloat(disc_amount);
    var real_amount = parseFloat(bet_after_disc);

    var new_as = real_amount.toFixed(3);    
    document.getElementById('real_amount').innerHTML = new_as;
    if(x <= 0){
        document.getElementById('real_amount').innerHTML = "";
    }
}
function get_real_amount_number48()
{
    var playtype = document.getElementById("play_type").value;
    var bet_type = document.getElementById("bet_type").value;
    var bet_type_name=document.getElementById("bet_type_name").innerHTML;
    var x = document.getElementById('bet_amount').value;
    var bet_on=trim(bet_type_name);
    var bet_number=bet_on.replace(/\s+/g, ' ');
    var number=bet_number.replace (/ /g,',');
    var array=number.split(",");

    var get_disc = document.getElementById('discount_'+playtype).value;
    var get_kei = document.getElementById('kei_'+playtype).value;

    if(playtype=="bigsmall" && bet_type==0 && document.getElementById('kei2_'+playtype) ){
        get_kei = document.getElementById('kei2_'+playtype).value;
    }
    else if(playtype=="evenodd" && bet_type==1 && document.getElementById('kei2_'+playtype) ){
        get_kei = document.getElementById('kei2_'+playtype).value;
    }
    else if(playtype=="combination" && bet_type==1 && document.getElementById('kei2_'+playtype) ){
        get_kei = document.getElementById('kei2_'+playtype).value;
    }
    else if(playtype=="combination" && bet_type==2 && document.getElementById('kei3_'+playtype) ){
        get_kei = document.getElementById('kei3_'+playtype).value;
    }
    else if(playtype=="combination" && bet_type==3 && document.getElementById('kei4_'+playtype) ){
        get_kei = document.getElementById('kei4_'+playtype).value;
    }

    if(x == ""){
        x=0;
    }
    
    var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
    var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
    var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei)/100);
    var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);
    var new_as = real_amount.toFixed(3);
    
    document.getElementById('real_amount').innerHTML = parseFloat(new_as).toFixed(3);
    if(x <= 0){
        document.getElementById('real_amount').innerHTML = "";
    }
}

function get_real_amount_number42()
{
    var playtype = document.getElementById("play_type").value;
    var bet_type = document.getElementById("bet_type").value;
    var bet_type_name=document.getElementById("bet_type_name").innerHTML;
    var x = document.getElementById('bet_amount').value;
    var bet_on=trim(bet_type_name);
    var bet_number=bet_on.replace(/\s+/g, ' ');
    var number=bet_number.replace (/ /g,',');
    var array=number.split(",");

    var get_disc = document.getElementById('discount_'+playtype).value;
    var get_kei = document.getElementById('kei_'+playtype).value;

    if(playtype=="bigsmall" && bet_type==0 && document.getElementById('kei2_'+playtype) ){
        get_kei = document.getElementById('kei2_'+playtype).value;
    }
    else if(playtype=="evenodd" && bet_type==1 && document.getElementById('kei2_'+playtype) ){
        get_kei = document.getElementById('kei2_'+playtype).value;
    }
    else if(playtype=="combination" && bet_type==1 && document.getElementById('kei2_'+playtype) ){
        get_kei = document.getElementById('kei2_'+playtype).value;
    }
    else if(playtype=="combination" && bet_type==2 && document.getElementById('kei3_'+playtype) ){
        get_kei = document.getElementById('kei3_'+playtype).value;
    }
    else if(playtype=="combination" && bet_type==3 && document.getElementById('kei4_'+playtype) ){
        get_kei = document.getElementById('kei4_'+playtype).value;
    }

    if(x == ""){
        x=0;
    }
    
    var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
    var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
    var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei)/100);
    var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);
    var new_as = real_amount.toFixed(3);
    if(array.length>1 && playtype!="combination" ){
        new_as=new_as*array.length;
    }
    document.getElementById('real_amount').innerHTML = parseFloat(new_as).toFixed(3);
    if(x <= 0){
        document.getElementById('real_amount').innerHTML = "";
    }
}
function get_real_amount_number_sicbo()
{
    var playtype = document.getElementById("play_type").value;
    var bet_type = document.getElementById("bet_type").value;
    var bet_type_name=document.getElementById("bet_type_name").innerHTML;
    var x = document.getElementById('bet_amount').value;
    var bet_on=trim(bet_type_name);
    var bet_number=bet_on.replace(/\s+/g, ' ');
    var number=bet_number.replace (/ /g,',');
    var array=number.split(",");

    var get_disc = document.getElementById('discount_'+playtype).value;
    var get_kei = document.getElementById('kei_'+playtype).value;
    if(playtype=="bigsmall" && bet_type==0 && document.getElementById('kei2_'+playtype) ){
        get_kei = document.getElementById('kei2_'+playtype).value;
    }
    else if(playtype=="evenodd" && bet_type==1 && document.getElementById('kei2_'+playtype) ){
        get_kei = document.getElementById('kei2_'+playtype).value;
    }   

    if(x == ""){
        x=0;
    }
    if(get_kei<=0)
    {
        var disc_amount = (parseFloat(x) * parseFloat(get_disc)/100);
        var bet_after_disc = parseFloat(x) - parseFloat(disc_amount);
        var kei_amount = parseFloat(bet_after_disc) * parseFloat(get_kei)/100;
        var real_amount = parseFloat(bet_after_disc) - parseFloat(kei_amount);
    }
    else if(get_kei>0)
    {
        var disc_amount = (parseFloat(x) * parseFloat(get_disc)/100);
        var bet_after_disc = parseFloat(x) - parseFloat(disc_amount);
        var real_amount = parseFloat(bet_after_disc);
    }
    var new_as = real_amount.toFixed(3);    
    document.getElementById('real_amount').innerHTML = parseFloat(new_as).toFixed(3);
    if(x <= 0){
        document.getElementById('real_amount').innerHTML = "";
    }
}
function get_real_amount_number_lobby()
{
    var playtype = document.getElementById("play_type").value;
    var bet_type = document.getElementById("bet_type").value;
    var bet_type_name=document.getElementById("bet_type_name").innerHTML;
    var gameindex=document.getElementById("game_index").value;
    var x = document.getElementById('bet_amount').value;
    var bet_on=trim(bet_type_name);
    var bet_number=bet_on.replace(/\s+/g, ' ');
    var number=bet_number.replace (/ /g,',');
    var array=number.split(",");

    var get_disc = document.getElementById('discount_'+playtype+'_'+gameindex).value;
    var get_kei = document.getElementById('kei_'+playtype+'_'+gameindex).value;

    if(playtype=="bigsmall" && bet_type==0 && document.getElementById('kei2_'+playtype+'_'+gameindex) ){
        get_kei = document.getElementById('kei2_'+playtype+'_'+gameindex).value;
    }
    else if(playtype=="evenodd" && bet_type==1 && document.getElementById('kei2_'+playtype+'_'+gameindex) ){
        get_kei = document.getElementById('kei2_'+playtype+'_'+gameindex).value;
    }
    else if(playtype=="combination" && bet_type==1 && document.getElementById('kei2_'+playtype+'_'+gameindex) ){
        get_kei = document.getElementById('kei2_'+playtype+'_'+gameindex).value;
    }
    else if(playtype=="combination" && bet_type==2 && document.getElementById('kei3_'+playtype+'_'+gameindex) ){
        get_kei = document.getElementById('kei3_'+playtype+'_'+gameindex).value;
    }
    else if(playtype=="combination" && bet_type==3 && document.getElementById('kei4_'+playtype+'_'+gameindex) ){
        get_kei = document.getElementById('kei4_'+playtype+'_'+gameindex).value;
    }

    if(x == ""){
        x=0;
    }

    var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
    var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
    var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei)/100);
    var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);
    

    var new_as = real_amount.toFixed(3);    
    if(array.length>1 && playtype!="combination" ){
        new_as=new_as*array.length;
    }
    
    document.getElementById('real_amount').innerHTML = parseFloat(new_as).toFixed(3);
    if(x <= 0){
        document.getElementById('real_amount').innerHTML = "";
    }
}
function trim(str){   
    return str.replace(/^(\s|\xA0)+|(\s|\xA0)+$/g, '');   
}  
function get_real_amount_234d(counter)
{
    var x = document.getElementById('amount'+counter).value;
    var target = document.getElementById('num'+counter).value;

    var get_disc2 = document.getElementById('discount2').value;
    var get_disc3 = document.getElementById('discount3').value;
    var get_disc4 = document.getElementById('discount4').value;

    var get_kei2d = document.getElementById('kei2').value;
    var get_kei3d = document.getElementById('kei3').value;
    var get_kei4d = document.getElementById('kei4').value;
    
    if(x == ""){
        x=0;
    }
        
    var length = target.length;
    if(target!="")
    {
        if(length==2)
        {
            var disc_amount2d       = Math.abs(parseFloat(x) * parseFloat(get_disc2)/100);
            var bet_after_disc2d    = parseFloat(x) - parseFloat(disc_amount2d);
            var kei_amount2d        = Math.abs(parseFloat(bet_after_disc2d) * parseFloat(get_kei2d)/100);
            var real_amount         = parseFloat(bet_after_disc2d) + parseFloat(kei_amount2d);
        }
        else if(length==3)
        {
            var disc_amount3d       = Math.abs(parseFloat(x) * parseFloat(get_disc3)/100);
            var bet_after_disc3d    = parseFloat(x) - parseFloat(disc_amount3d);
            var kei_amount3d        = Math.abs(parseFloat(bet_after_disc3d) * parseFloat(get_kei3d)/100);
            var real_amount         = parseFloat(bet_after_disc3d) + parseFloat(kei_amount3d);
        }
        else if(length==4)
        {
            var disc_amount4d       = Math.abs(parseFloat(x) * parseFloat(get_disc4)/100);
            var bet_after_disc4d    = parseFloat(x) - parseFloat(disc_amount4d);
            var kei_amount4d        = Math.abs(parseFloat(bet_after_disc4d) * parseFloat(get_kei4d)/100);
            var real_amount         = parseFloat(bet_after_disc4d) + parseFloat(kei_amount4d);
        }

        var new_as = real_amount.toFixed(3);
        
        document.getElementById('real_amount'+counter).value = new_as;
        if(x < 0){
            document.getElementById('real_amount'+counter).value = "";
        }
    }
    
    if(target==""){
        document.getElementById('amount'+counter).value = "";
        document.getElementById('real_amount'+counter).value = "";
    }
    
    get_total_234d();
}
function get_real_amount_1234d(counter) {
    var x = document.getElementById('amount' + counter).value;
    var target = document.getElementById('num' + counter).value;
    var get_disc1 = document.getElementById('discount1').value;
    var get_disc2 = document.getElementById('discount2').value;
    var get_disc3 = document.getElementById('discount3').value;
    var get_disc4 = document.getElementById('discount4').value;
    var get_kei1d = document.getElementById('kei1').value;
    var get_kei2d = document.getElementById('kei2').value;
    var get_kei3d = document.getElementById('kei3').value;
    var get_kei4d = document.getElementById('kei4').value;
    var real_amount = 0;
    if (x == "") {
        x = 0;
    }
    var length = target.length;
    if (target != "") {
        if (length == 1) {
            var disc_amount1d = Math.abs(parseFloat(x) * parseFloat(get_disc1) / 100);
            var bet_after_disc1d = parseFloat(x) - parseFloat(disc_amount1d);
            var kei_amount1d = Math.abs(parseFloat(bet_after_disc1d) * parseFloat(get_kei1d) / 100);
            real_amount = parseFloat(bet_after_disc1d) + parseFloat(kei_amount1d);
        } else if (length == 2) {
            var disc_amount2d = Math.abs(parseFloat(x) * parseFloat(get_disc2) / 100);
            var bet_after_disc2d = parseFloat(x) - parseFloat(disc_amount2d);
            var kei_amount2d = Math.abs(parseFloat(bet_after_disc2d) * parseFloat(get_kei2d) / 100);
            real_amount = parseFloat(bet_after_disc2d) + parseFloat(kei_amount2d);
        } else if (length == 3) {
            var disc_amount3d = Math.abs(parseFloat(x) * parseFloat(get_disc3) / 100);
            var bet_after_disc3d = parseFloat(x) - parseFloat(disc_amount3d);
            var kei_amount3d = Math.abs(parseFloat(bet_after_disc3d) * parseFloat(get_kei3d) / 100);
            real_amount = parseFloat(bet_after_disc3d) + parseFloat(kei_amount3d);
        }else if(length==4){
            var disc_amount4d       = Math.abs(parseFloat(x) * parseFloat(get_disc4)/100);
            var bet_after_disc4d    = parseFloat(x) - parseFloat(disc_amount4d);
            var kei_amount4d        = Math.abs(parseFloat(bet_after_disc4d) * parseFloat(get_kei4d)/100);
            var real_amount         = parseFloat(bet_after_disc4d) + parseFloat(kei_amount4d);
        }
        var new_as = real_amount.toFixed(3);
        document.getElementById('real_amount' + counter).value = new_as;
        if (x < 0) {
            document.getElementById('real_amount' + counter).value = "";
        }
    }
    if (target == "") {
        document.getElementById('amount' + counter).value = "";
        document.getElementById('real_amount' + counter).value = "";
    }
    get_total_234d();
}
function get_total_234d()
{
    var total_all = 0;
    var total_all_after = 0;
    for(var i=1;i<=20;i++)
    {
        if(parseFloat(document.getElementById("amount"+i).value) && parseFloat(document.getElementById("num"+i).value))
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amount"+i).value);
        if(parseFloat(document.getElementById("amount"+i).value) && parseFloat(document.getElementById("num"+i).value) && parseFloat(document.getElementById("real_amount"+i).value))
            total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amount"+i).value);
    }
    if(total_all>=0)
        document.getElementById("total_all_before_sum").innerHTML = total_all.toFixed(3);
    if(total_all_after>=0)
        document.getElementById("total_all_after_sum").innerHTML = total_all_after.toFixed(3);
}

function get_real_amount_shio(counter)
{
    var x = document.getElementById('amount'+counter).value;
    var get_disc = document.getElementById('discount'+counter).value;
    var get_kei = document.getElementById('kei'+counter).value;

    if(x == ""){
        x=0;
    }
        
    var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
    var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
    var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei)/100);
    var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);

    var new_as = real_amount.toFixed(3);    
    document.getElementById('real_amount'+counter).value = new_as;
    if(x <= 0){
        document.getElementById('real_amount'+counter).value = "";
    }
    
    get_total_shio();
}

function get_total_shio()
{
    var total_all = 0;
    var total_all_after = 0;
    var shio=new Array("ULAR","NAGA","KELINCI","HARIMAU","KERBAU","TIKUS","BABI","ANJING","AYAM","MONYET","KAMBING","KUDA");
    for(var i=0;i<=11;i++)
    {
        if(parseFloat(document.getElementById("amount"+shio[i]).value) )
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amount"+shio[i]).value);
        if(parseFloat(document.getElementById("amount"+shio[i]).value) && parseFloat(document.getElementById("real_amount"+shio[i]).value))
            total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amount"+shio[i]).value);
    }
    if(total_all>=0)
        document.getElementById("total_all_before_sum").innerHTML = total_all.toFixed(3);
    if(total_all_after>=0)
        document.getElementById("total_all_after_sum").innerHTML = total_all_after.toFixed(3);
    shio=[];
}
function get_real_amount_bs_oe(counter)
{
    var x = document.getElementById('amount'+counter).value;
    var get_disc = document.getElementById('discount'+counter).value;
    var get_kei1 = document.getElementById('kei'+counter+'0').value;
    var get_kei2 = document.getElementById('kei'+counter+'1').value;

    if(x == ""){
        x=0;
    }

    if(document.getElementById(counter+'0').checked==true){ 
        var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
        var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
        var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei2)/100);
        var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);
    }
    else if(document.getElementById(counter+'1').checked==true){
        var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
        var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
        var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei1)/100);
        var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);
    }

    var new_as = real_amount.toFixed(3);    
    document.getElementById('real_amount'+counter).value = new_as;
    if(x <= 0){
        document.getElementById('real_amount'+counter).value = "";
    }
    
    get_total_bsoe();
}
function get_real_amount_bsoe(counter)
{
    var x = document.getElementById('amount'+counter).value;
    var get_disc = document.getElementById('discount'+counter).value;
    var get_kei1 = document.getElementById('kei'+counter+'0').value;
    var get_kei2 = document.getElementById('kei'+counter+'1').value;
    var get_kei3 = document.getElementById('kei'+counter+'2').value;
    var get_kei4 = document.getElementById('kei'+counter+'3').value;

    if(x == ""){
        x=0;
    }

    if(document.getElementById(counter+'0').checked==true){ 
        var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
        var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
        var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei1)/100);
        var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);
    }
    else if(document.getElementById(counter+'1').checked==true){
        var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
        var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
        var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei2)/100);
        var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);
    }
    else if(document.getElementById(counter+'2').checked==true){
        var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
        var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
        var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei3)/100);
        var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);
    }
    else if(document.getElementById(counter+'3').checked==true){
        var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
        var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
        var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei4)/100);
        var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);
    }

    var new_as = real_amount.toFixed(3);    
    document.getElementById('real_amount'+counter).value = new_as;
    if(x <= 0){
        document.getElementById('real_amount'+counter).value = "";
    }
    
    get_total_bsoe();
}
function get_total_bsoe()
{
    var total_all = 0;
    var total_all_after = 0;
    var bsoe=new Array("BigSmall","OddEven","BSOE");
    for(var i=0;i<=2;i++)
    {
        if(parseFloat(document.getElementById("amount"+bsoe[i]).value) )
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amount"+bsoe[i]).value);
        if(parseFloat(document.getElementById("amount"+bsoe[i]).value) && parseFloat(document.getElementById("real_amount"+bsoe[i]).value))
            total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amount"+bsoe[i]).value);
    }
    if(total_all>=0)
        document.getElementById("total_all_before_sum").innerHTML = total_all.toFixed(3);
    if(total_all_after>=0)
        document.getElementById("total_all_after_sum").innerHTML = total_all_after.toFixed(3);
    bsoe=[];
}
function get_real_amount_jitu(counter,index)
{
    var x = document.getElementById('amount'+counter+index).value;
    var target = document.getElementById('num1'+counter+index).value;
    var target1= document.getElementById('num2'+counter+index+1).checked;
    var target2= document.getElementById('num2'+counter+index+2).checked;
    var target3= document.getElementById('num2'+counter+index+3).checked;
    var target4= document.getElementById('num2'+counter+index+4).checked;

    var get_disc = document.getElementById('discount'+counter).value;
    var get_kei = document.getElementById('kei'+counter).value;
    
    if(x == ""){
        x=0;
    }
        
    var length = target.length;
    if(target!="" && length==1 && (target1||target2||target3||target4))
    {
        var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
        var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
        var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei)/100);
        var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);

        var new_as = real_amount.toFixed(3);
        
        document.getElementById('real_amount'+counter+index).value = new_as;
        if(x < 0){
            document.getElementById('real_amount'+counter+index).value = "";
        }
    }
    
    if(target==""){
        document.getElementById('amount'+counter+index).value = "";
        document.getElementById('real_amount'+counter+index).value = "";
    }

    if(target1||target2||target3||target4)
        get_total_colok();
}
function get_real_amount_macau(counter,index)
{
    var x = document.getElementById('amount'+counter+index).value;
    var target = document.getElementById('num'+counter+index).value;

    var get_disc = document.getElementById('discount'+counter).value;
    var get_kei = document.getElementById('kei'+counter).value;
    
    if(x == ""){
        x=0;
    }
        
    var length = target.length;
    if(target!="" && length==2)
    {
        var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
        var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
        var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei)/100);
        var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);

        var new_as = real_amount.toFixed(3);
        
        document.getElementById('real_amount'+counter+index).value = new_as;
        if(x < 0){
            document.getElementById('real_amount'+counter+index).value = "";
        }
    }
    
    if(target==""){
        document.getElementById('amount'+counter+index).value = "";
        document.getElementById('real_amount'+counter+index).value = "";
    }
    
    get_total_colok();
}
function get_real_amount_naga(counter,index)
{
    var x = document.getElementById('amount'+counter+index).value;
    var target = document.getElementById('num'+counter+index).value;

    var get_disc = document.getElementById('discount'+counter).value;
    var get_kei = document.getElementById('kei'+counter).value;
    
    if(x == ""){
        x=0;
    }
        
    var length = target.length;
    if(target!="" && length==3)
    {
        var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
        var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
        var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei)/100);
        var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);

        var new_as = real_amount.toFixed(3);
        
        document.getElementById('real_amount'+counter+index).value = new_as;
        if(x < 0){
            document.getElementById('real_amount'+counter+index).value = "";
        }
    }
    
    if(target==""){
        document.getElementById('amount'+counter+index).value = "";
        document.getElementById('real_amount'+counter+index).value = "";
    }
    
    get_total_colok();
}
function get_real_amount_angka(counter,index)
{
    var x = document.getElementById('amount'+counter+index).value;
    var get_disc = document.getElementById('discount'+counter).value;
    var get_kei = document.getElementById('kei'+counter).value;

    if(x == ""){
        x=0;
    }

    var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
    var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
    var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei)/100);
    var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);

    var new_as = real_amount.toFixed(3);    
    document.getElementById('real_amount'+counter+index).value = new_as;
    if(x <= 0){
        document.getElementById('real_amount'+counter+index).value = "";
    }
    
    get_total_colok();
}

function get_total_colok()
{
    var total_all = 0;
    var total_all_after = 0;
    for(var i=0;i<=9;i++)
    {
        if(parseFloat(document.getElementById("amountAngka"+i).value))
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amountAngka"+i).value);
        if(parseFloat(document.getElementById("amountAngka"+i).value) && parseFloat(document.getElementById("real_amountAngka"+i).value))
            total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amountAngka"+i).value);
    }
    for(var i=1;i<=4;i++)
    {
        if(parseFloat(document.getElementById("amountMacau"+i).value))
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amountMacau"+i).value);
        if(parseFloat(document.getElementById("amountMacau"+i).value) && parseFloat(document.getElementById("real_amountMacau"+i).value))
            total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amountMacau"+i).value);

        if(parseFloat(document.getElementById("amountNaga"+i).value))
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amountNaga"+i).value);
        if(parseFloat(document.getElementById("amountNaga"+i).value) && parseFloat(document.getElementById("real_amountNaga"+i).value))
            total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amountNaga"+i).value);

        if(parseFloat(document.getElementById("amountJitu"+i).value))
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amountJitu"+i).value);
        if(parseFloat(document.getElementById("amountJitu"+i).value) && parseFloat(document.getElementById("real_amountJitu"+i).value))
            total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amountJitu"+i).value);
    }
    if(total_all>=0)
        document.getElementById("total_all_before_sum").innerHTML = total_all.toFixed(3);
    if(total_all_after>=0)
        document.getElementById("total_all_after_sum").innerHTML = total_all_after.toFixed(3);
}

function get_real_amount_multi(counter)
{
    var d2 = document.getElementById('amount2D'+counter).value;
    var d3 = document.getElementById('amount3D'+counter).value;
    var d4 = document.getElementById('amount4D'+counter).value;
    var target = document.getElementById('num'+counter).value;

    var get_disc2 = document.getElementById('discount2').value;
    var get_disc3 = document.getElementById('discount3').value;
    var get_disc4 = document.getElementById('discount4').value;

    var get_kei2d = document.getElementById('kei2').value;
    var get_kei3d = document.getElementById('kei3').value;
    var get_kei4d = document.getElementById('kei4').value;

    if(d2 == ""){
        d2=0;
    }
    if(d3 == ""){
        d3=0;
    }
    if(d4 == ""){
        d4=0;
    }
        
    var length = target.length;
    if(target!=""){
        if(length<2){
            document.getElementById('amount3D'+counter).disabled=true; 
            document.getElementById('amount3D'+counter).style.backgroundColor="yellow";
            document.getElementById('amount4D'+counter).disabled=true; 
            document.getElementById('amount4D'+counter).style.backgroundColor="yellow";
            document.getElementById('amount2D'+counter).value = "";
            document.getElementById('amount3D'+counter).value = "";
            document.getElementById('amount4D'+counter).value = "";
        }
        else if(length==2){
            document.getElementById('amount3D'+counter).disabled=true; 
            document.getElementById('amount3D'+counter).style.backgroundColor="yellow";
            document.getElementById('amount4D'+counter).disabled=true; 
            document.getElementById('amount4D'+counter).style.backgroundColor="yellow";
            document.getElementById('amount3D'+counter).value = "";
            document.getElementById('amount4D'+counter).value = "";
        }
        else if(length==3){
            document.getElementById('amount3D'+counter).disabled=false; 
            document.getElementById('amount3D'+counter).style.backgroundColor="";
            document.getElementById('amount4D'+counter).disabled=true; 
            document.getElementById('amount4D'+counter).style.backgroundColor="yellow";
            document.getElementById('amount4D'+counter).value = "";
        }
        else if(length==4){
            document.getElementById('amount3D'+counter).disabled=false; 
            document.getElementById('amount3D'+counter).style.backgroundColor="";
            document.getElementById('amount4D'+counter).disabled=false; 
            document.getElementById('amount4D'+counter).style.backgroundColor="";
        }
    }
    else{
        document.getElementById('amount3D'+counter).disabled=false; 
        document.getElementById('amount3D'+counter).style.backgroundColor="";
        document.getElementById('amount4D'+counter).disabled=false;
        document.getElementById('amount4D'+counter).style.backgroundColor="";

        document.getElementById('amount2D'+counter).value = "";
        document.getElementById('amount3D'+counter).value = "";
        document.getElementById('amount4D'+counter).value = "";
        document.getElementById('real_amount'+counter).value = "";
    }

    var counter_machine=0;
    var success_text = new Array();
    if(length==4 && d4 !="" && d4 >0)
    {
        for(var i=0; i<length; i++)
        {
            var first_text = target[i];

            for(var j=0; j<length; j++)
            {
                if(i != j)
                {
                    var second_text = target[j];

                    for(var k=0 ; k<length; k++)
                    {
                        if(k != i && k != j)
                        {
                            var third_text = target[k];

                            for(var l=0 ; l<length; l++)
                            {
                                if(l != i && l != j && l != k)
                                {
                                    var last_text = target[l];
                                    var full_text = first_text+second_text+third_text+last_text;
                                    var exist = 0;
                                    for(var checker = 0 ; checker < counter_machine ; checker++)
                                    {
                                        if(success_text[checker] == full_text)
                                        {
                                            exist++;
                                            break;
                                        }
                                    }
                                    if(exist==0)
                                    {
                                        success_text[counter_machine] = full_text;
                                        counter_machine++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if(length>=3 && d3 !="" && d3 !=0)
    {
        for(var i=0; i<length; i++)
        {
            var first_text = target[i];
            for(var j=0; j<length; j++)
            {
                if(i != j)
                {
                    var second_text = target[j];

                    for(var k=0 ; k<length; k++)
                    {
                        if(k != i && k != j)
                        {
                            var last_text = target[k];
                            var full_text = first_text+second_text+last_text;
                            var exist = 0;
                            for(var checker = 0 ; checker < counter_machine ; checker++)
                            {
                                if(success_text[checker] == full_text && success_text[checker].length== full_text.length)
                                {
                                    exist++;
                                    break;
                                }
                            }
                            if(exist==0)
                            {
                                success_text[counter_machine] = full_text;
                                counter_machine++;
                            }
                        }
                    }
                }
            }
        }
    }
    if(length>=2 && d2 !="" && d2 !=0)
    {
        for(var i=0; i<length; i++)
        {
            var first_text = target[i];

            for(var j=0; j<length; j++)
            {
                if(i != j)
                {
                    var last_text = target[j];
                    var full_text = first_text+last_text;
                    var exist = 0;
                    for(var checker = 0 ; checker < counter_machine ; checker++)
                    {
                        if(success_text[checker] == full_text && success_text[checker].length== full_text.length)
                        {
                            exist++;
                            break;
                        }
                    }
                    if(exist==0)
                    {
                        success_text[counter_machine] = full_text;
                        counter_machine++;
                    }
                }
            }
        }
    }

    var real_amount  = 0;
    var real_amount2d=0;
    var real_amount3d=0;
    var real_amount4d=0;
    for(var x_count = 0 ; x_count<counter_machine; x_count++)
    {
        var bet_amount  = 0;
        var data_string = success_text[x_count];
        var kei     =0;
        var discount=0;
        var amount  =0;
        if(data_string.length==2 && d2!=0)
        {
            kei      = get_kei2d;
            discount = get_disc2;
            amount   = d2;
        }
        if(data_string.length==3 && d3!=0)
        {
            kei      = get_kei3d;
            discount = get_disc3;
            amount   = d3;
        }
        if(data_string.length==4 && d4!=0)
        {
            kei      = get_kei4d;
            discount = get_disc4;
            amount   = d4;
        }
        
        var discount_amount     = Math.abs(amount * discount/100);
        var bet_after_discount  = amount - discount_amount;
        var kei_amount          = Math.abs(bet_after_discount * kei/100);
        bet_amount              = bet_after_discount + kei_amount;
        
        if(data_string.length==2 && d2!=0)
        {
            real_amount2d += parseFloat(amount);
        }
        if(data_string.length==3 && d3!=0)
        {
            real_amount3d += parseFloat(amount);
        }
        if(data_string.length==4 && d4!=0)
        {
            real_amount4d += parseFloat(amount);
        }
        
        real_amount += parseFloat(bet_amount);
    }

    document.getElementById('real_amount'+counter).value = real_amount.toFixed(3);
    document.getElementById('amountTotal2D'+counter).value = real_amount2d.toFixed(3);
    document.getElementById('amountTotal3D'+counter).value = real_amount3d.toFixed(3);
    document.getElementById('amountTotal4D'+counter).value = real_amount4d.toFixed(3);

    get_total_multi();
}

function get_total_multi()
{
    var total_all = 0;
    var total_all_after = 0;
    for(var i=1;i<=10;i++)
    {
        if(parseFloat(document.getElementById("amountTotal2D"+i).value) )
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amountTotal2D"+i).value);
        if(parseFloat(document.getElementById("amountTotal3D"+i).value) )
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amountTotal3D"+i).value);
        if(parseFloat(document.getElementById("amountTotal4D"+i).value) )
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amountTotal4D"+i).value);
        if(parseFloat(document.getElementById("real_amount"+i).value))
            total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amount"+i).value);
    }
    if(total_all>=0)
        document.getElementById("total_all_before_sum").innerHTML = total_all.toFixed(3);
    if(total_all_after>=0)
        document.getElementById("total_all_after_sum").innerHTML = total_all_after.toFixed(3);
}

//9.29
function get_real_amount_th_234d(counter,index)
{
    var target = document.getElementById('num'+index).value;

    var tx = document.getElementById('amount'+counter+'top'+index).value;
    var bx = document.getElementById('amount'+counter+'bottom'+index).value;
    var rx = document.getElementById('amount'+counter+'roll'+index).value;

    var get_disc_t = document.getElementById('discount'+counter+'top').value;
    var get_disc_b = document.getElementById('discount'+counter+'bottom').value;
    var get_disc_r = document.getElementById('discount'+counter+'roll').value;
    
    var get_kei_t = document.getElementById('kei'+counter+'top').value;
    var get_kei_b = document.getElementById('kei'+counter+'bottom').value;
    var get_kei_r = document.getElementById('kei'+counter+'roll').value;
    
    var length = target.length;
    if(target!="")
    {
        var new_as = 0;
        if(tx != ""){
            var disc_amount     = Math.abs(parseFloat(tx) * parseFloat(get_disc_t)/100);
            var bet_after_disc  = parseFloat(tx) - parseFloat(disc_amount);
            var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei_t)/100);
            var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);
            
            new_as = parseFloat(real_amount);
        }
        if(bx != ""){
            var disc_amount     = Math.abs(parseFloat(bx) * parseFloat(get_disc_b)/100);
            var bet_after_disc  = parseFloat(bx) - parseFloat(disc_amount);
            var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei_b)/100);
            var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);
            
            new_as = parseFloat(new_as) + parseFloat(real_amount);
        }
        if(rx != ""){
            var disc_amount     = Math.abs(parseFloat(rx) * parseFloat(get_disc_r)/100);
            var bet_after_disc  = parseFloat(rx) - parseFloat(disc_amount);
            var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei_r)/100);
            var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);

            new_as = parseFloat(new_as) + parseFloat(real_amount);
        }

        document.getElementById('real_amount'+index).value = new_as.toFixed(3);
        if(tx < 0 || bx < 0 || rx < 0){
            document.getElementById('real_amount'+index).value = "";
        }
    }
    
    if(target==""){
        document.getElementById('amount'+counter).value = "";
        document.getElementById('real_amount'+counter).value = "";
    }
    
    get_total_th_234d();
}

function get_total_th_234d()
{
    var total_all = 0;
    var total_all_after = 0;
    for(var i=1;i<=10;i++)
    {
        var target = document.getElementById('num'+i).value;

        if(target.length==2){
            var tx = document.getElementById('amount2Dtop'+i).value;
            var bx = document.getElementById('amount2Dbottom'+i).value;
            var rx = document.getElementById('amount2Droll'+i).value;

            if(tx !="" || bx !="" || rx !=""){
                if(tx==""){tx=0;}
                if(bx==""){bx=0;}
                if(rx==""){rx=0;}
                total_all = parseFloat(total_all) + parseFloat(tx) + parseFloat(bx) + parseFloat(rx);
            }
            if((tx !="" || bx !="" || rx !="") && parseFloat(document.getElementById("num"+i).value) && parseFloat(document.getElementById("real_amount"+i).value))
                total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amount"+i).value);
        }
        if(target.length==3){
            var tx = document.getElementById('amount3Dtop'+i).value;
            var bx = document.getElementById('amount3Dbottom'+i).value;
            var rx = document.getElementById('amount3Droll'+i).value;
            var ix = document.getElementById('amount3Dinfront'+i).value;

            if(tx !="" || bx !="" || rx !=""|| ix !=""){
                if(tx==""){tx=0;}
                if(bx==""){bx=0;}
                if(rx==""){rx=0;}
                if(ix==""){ix=0;}
                total_all = parseFloat(total_all) + parseFloat(tx) + parseFloat(bx) + parseFloat(rx) + parseFloat(ix);
            }
            if((tx !="" || bx !="" || rx !=""|| ix !="") && parseFloat(document.getElementById("num"+i).value) && parseFloat(document.getElementById("real_amount"+i).value))
                total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amount"+i).value);
        }
    }
    
    if(total_all>=0)
        document.getElementById("total_all_before_sum").innerHTML = total_all.toFixed(3);
    if(total_all_after>=0)
        document.getElementById("total_all_after_sum").innerHTML = total_all_after.toFixed(3);
}

function get_real_amount_th_3d(counter,index)
{
    var target = document.getElementById('num'+index).value;

    var tx = document.getElementById('amount'+counter+'top'+index).value;
    var bx = document.getElementById('amount'+counter+'bottom'+index).value;
    var rx = document.getElementById('amount'+counter+'roll'+index).value;
    var ix = document.getElementById('amount'+counter+'infront'+index).value;

    var get_disc_t = document.getElementById('discount'+counter+'top').value;
    var get_disc_b = document.getElementById('discount'+counter+'bottom').value;
    var get_disc_r = document.getElementById('discount'+counter+'roll').value;
    var get_disc_i = document.getElementById('discount'+counter+'infront').value;
    
    var get_kei_t = document.getElementById('kei'+counter+'top').value;
    var get_kei_b = document.getElementById('kei'+counter+'bottom').value;
    var get_kei_r = document.getElementById('kei'+counter+'roll').value;
    var get_kei_i = document.getElementById('kei'+counter+'infront').value;
    
    var length = target.length;
    if(target!="")
    {
        var new_as = 0;
        if(tx != ""){
            var disc_amount     = Math.abs(parseFloat(tx) * parseFloat(get_disc_t)/100);
            var bet_after_disc  = parseFloat(tx) - parseFloat(disc_amount);
            var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei_t)/100);
            var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);
            
            new_as = parseFloat(real_amount);
        }
        if(bx != ""){
            var disc_amount     = Math.abs(parseFloat(bx) * parseFloat(get_disc_b)/100);
            var bet_after_disc  = parseFloat(bx) - parseFloat(disc_amount);
            var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei_b)/100);
            var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);
            
            new_as = parseFloat(new_as) + parseFloat(real_amount);
        }
        if(rx != ""){
            var disc_amount     = Math.abs(parseFloat(rx) * parseFloat(get_disc_r)/100);
            var bet_after_disc  = parseFloat(rx) - parseFloat(disc_amount);
            var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei_r)/100);
            var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);

            new_as = parseFloat(new_as) + parseFloat(real_amount);
        }
        if(ix != ""){
            var disc_amount     = Math.abs(parseFloat(ix) * parseFloat(get_disc_i)/100);
            var bet_after_disc  = parseFloat(ix) - parseFloat(disc_amount);
            var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei_i)/100);
            var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);

            new_as = parseFloat(new_as) + parseFloat(real_amount);
        }

        document.getElementById('real_amount'+index).value = new_as.toFixed(3);
        if(tx < 0 || bx < 0 || rx < 0 || ix < 0){
            document.getElementById('real_amount'+index).value = "";
        }
    }
    
    if(target==""){
        document.getElementById('amount'+counter).value = "";
        document.getElementById('real_amount'+counter).value = "";
    }
    
    get_total_th_234d();
}

function get_real_amount_1234tb(counter,index)
{
    var x = document.getElementById('amount'+counter+index).value;
    var get_disc = document.getElementById('discount'+counter).value;
    var get_kei = document.getElementById('kei'+counter).value;

    if(x == ""){
        x=0;
    }

    var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
    var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
    var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei)/100);
    var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);

    var new_as = real_amount.toFixed(3);    
    document.getElementById('real_amount'+counter+index).value = new_as;
    if(x <= 0){
        document.getElementById('real_amount'+counter+index).value = "";
    }
    
    get_total_1234tb();
}

function get_total_1234tb()
{
    var total_all = 0;
    var total_all_after = 0;
    
    for(var i=0;i<=9;i++)
    {
        if(parseFloat(document.getElementById("amount1Dtop"+i).value))
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amount1Dtop"+i).value);
        if(parseFloat(document.getElementById("amount1Dtop"+i).value) && parseFloat(document.getElementById("real_amount1Dtop"+i).value))
            total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amount1Dtop"+i).value);
        
        if(parseFloat(document.getElementById("amount1Dbottom"+i).value))
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amount1Dbottom"+i).value);
        if(parseFloat(document.getElementById("amount1Dbottom"+i).value) && parseFloat(document.getElementById("real_amount1Dbottom"+i).value))
            total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amount1Dbottom"+i).value);
    }
    
    if(total_all>=0)
        document.getElementById("total_all_before_sum").innerHTML = total_all.toFixed(3);
    if(total_all_after>=0)
        document.getElementById("total_all_after_sum").innerHTML = total_all_after.toFixed(3);
}

function th_get_real_amount_bs(counter)
{
    var x = document.getElementById('amount'+counter).value;
    var get_disc = document.getElementById('discount'+counter).value;
    var get_kei1 = document.getElementById('kei'+counter+'0').value;
    var get_kei2 = document.getElementById('kei'+counter+'1').value;

    if(x == ""){
        x=0;
    }

    if(document.getElementById(counter+'0').checked==true){ 
        var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
        var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
        var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei2)/100);
        var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);
    }
    else if(document.getElementById(counter+'1').checked==true){
        var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
        var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
        var kei_amount      = Math.abs(parseFloat(bet_after_disc) * parseFloat(get_kei1)/100);
        var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);
    }

    var new_as = real_amount.toFixed(3);    
    document.getElementById('real_amount'+counter).value = new_as;
    if(x <= 0){
        document.getElementById('real_amount'+counter).value = "";
    }
    
    th_get_total_bs();
}
function th_get_total_bs()
{
    var total_all = 0;
    var total_all_after = 0;

    if(parseFloat(document.getElementById("amountBigSmall").value) )
        total_all = parseFloat(total_all) + parseFloat(document.getElementById("amountBigSmall").value);
    if(parseFloat(document.getElementById("amountBigSmall").value) && parseFloat(document.getElementById("real_amountBigSmall").value))
        total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amountBigSmall").value);

    if(total_all>=0)
        document.getElementById("total_all_before_sum").innerHTML = total_all.toFixed(3);
    if(total_all_after>=0)
        document.getElementById("total_all_after_sum").innerHTML = total_all_after.toFixed(3);
}

function th_get_real_amount_fast(counter)
{
    var top     = document.getElementById('amounttop'+counter).value;
    var infront = document.getElementById('amountinfront'+counter).value;
    var bottom  = document.getElementById('amountbottom'+counter).value;
    var roll    = document.getElementById('amountroll'+counter).value;
    
    var target = document.getElementById('num'+counter).value;
    var length = target.length;

    if(top == ""){ top=0; }
    if(infront == ""){ infront=0; }
    if(bottom == ""){ bottom=0; }
    if(roll == ""){ roll=0; }

    
    if(target!=""){
        if(length==1){
            var get_disc1Dtop = document.getElementById('discount1Dtop').value;
            var get_kei1Dtop = document.getElementById('kei1Dtop').value;
            var get_disc1Dbottom = document.getElementById('discount1Dbottom').value;
            var get_kei1Dbottom = document.getElementById('kei1Dbottom').value;
            
            document.getElementById('amountinfront'+counter).disabled=true; 
            document.getElementById('amountinfront'+counter).style.backgroundColor="yellow";
            document.getElementById('amountroll'+counter).disabled=true; 
            document.getElementById('amountroll'+counter).style.backgroundColor="yellow";
            document.getElementById('amountinfront'+counter).value = "";
            document.getElementById('amountroll'+counter).value = "";
        }
        else if(length==2){
            var get_disc2Dtop = document.getElementById('discount2Dtop').value;
            var get_kei2Dtop = document.getElementById('kei2Dtop').value;
            var get_disc2Dbottom = document.getElementById('discount2Dbottom').value;
            var get_kei2Dbottom = document.getElementById('kei2Dbottom').value;
            var get_disc2Droll = document.getElementById('discount2Droll').value;
            var get_kei2Droll = document.getElementById('kei2Droll').value;
            
            document.getElementById('amountinfront'+counter).disabled=true; 
            document.getElementById('amountinfront'+counter).style.backgroundColor="yellow";
            document.getElementById('amountroll'+counter).disabled=false;
            document.getElementById('amountroll'+counter).style.backgroundColor="";
            document.getElementById('amountinfront'+counter).value = "";
        }
        else if(length==3){
            var get_disc3Dtop = document.getElementById('discount3Dtop').value;
            var get_kei3Dtop = document.getElementById('kei3Dtop').value;
            var get_disc3Dbottom = document.getElementById('discount3Dbottom').value;
            var get_kei3Dbottom = document.getElementById('kei3Dbottom').value;
            var get_disc3Droll = document.getElementById('discount3Droll').value;
            var get_kei3Droll = document.getElementById('kei3Droll').value;
            var get_disc3DInfront = document.getElementById('discount3DInfront').value;
            var get_kei3DInfront = document.getElementById('kei3DInfront').value;
            
            document.getElementById('amountinfront'+counter).disabled=false; 
            document.getElementById('amountinfront'+counter).style.backgroundColor="";
        }
    }
    else{
        document.getElementById('amountinfront'+counter).disabled=false; 
        document.getElementById('amountinfront'+counter).style.backgroundColor="";
        document.getElementById('amountroll'+counter).disabled=false; 
        document.getElementById('amountroll'+counter).style.backgroundColor="";
        
        document.getElementById('amounttop'+counter).value = "";
        document.getElementById('amountinfront'+counter).value = "";
        document.getElementById('amountbottom'+counter).value = "";
        document.getElementById('amountroll'+counter).value = "";
        document.getElementById('real_amount'+counter).value = "";
    }
    var new_as = 0;
    
    if(length==1)
    {
        if(top!=0){
            var kei = get_kei1Dtop;
            var discount = get_disc1Dtop;
            var amount   = top;
            new_as = parseFloat(get_real_amount(kei,discount,amount));
        }
        if(bottom!=0){
            var kei = get_kei1Dbottom;
            var discount = get_disc1Dbottom;
            var amount   = bottom;
            new_as = parseFloat(new_as) + parseFloat(get_real_amount(kei,discount,amount));
        }
    }
    if(length==2)
       {
        if(top!=0){
            var kei = get_kei2Dtop;
            var discount = get_disc2Dtop;
            var amount   = top;
            new_as = parseFloat(get_real_amount(kei,discount,amount));
        }
        if(bottom!=0){
            var kei = get_kei2Dbottom;
            var discount = get_disc2Dbottom;
            var amount   = bottom;
            new_as = parseFloat(new_as) + parseFloat(get_real_amount(kei,discount,amount));
        }
        if(roll!=0){
            var kei = get_kei2Droll;
            var discount = get_disc2Droll;
            var amount   = roll;
            new_as = parseFloat(new_as) + parseFloat(get_real_amount(kei,discount,amount));
        }
    }
    if(length==3)
    {
        if(top!=0){
            var kei = get_kei3Dtop;
            var discount = get_disc3Dtop;
            var amount   = top;
            new_as = parseFloat(get_real_amount(kei,discount,amount));
        }
        if(infront!=0){
            var kei = get_kei3DInfront;
            var discount = get_disc3DInfront;
            var amount   = infront;
            new_as = parseFloat(new_as) + parseFloat(get_real_amount(kei,discount,amount));
        }
        if(bottom!=0){
            var kei = get_kei3Dbottom;
            var discount = get_disc3Dbottom;
            var amount   = bottom;
            new_as = parseFloat(new_as) + parseFloat(get_real_amount(kei,discount,amount));
        }
        if(roll!=0){
            var kei = get_kei3Droll;
            var discount = get_disc3Droll;
            var amount   = roll;
            new_as = parseFloat(new_as) + parseFloat(get_real_amount(kei,discount,amount));
        }
    }
    document.getElementById('real_amount'+counter).value = new_as.toFixed(3);
    th_get_total_fast();
}

function th_get_total_fast()
{
    var total_all = 0;
    var total_all_after = 0;
    for(var i=1;i<=10;i++)
    {
        var target = document.getElementById('num'+i).value;
        var tx = document.getElementById('amounttop'+i).value;
        var bx = document.getElementById('amountbottom'+i).value;
        var rx = document.getElementById('amountroll'+i).value;
        var ix = document.getElementById('amountinfront'+i).value;
        
        if(target.length==1){
            if(tx !="" || bx !=""){
                if(tx==""){tx=0;}
                if(bx==""){bx=0;}
                total_all = parseFloat(total_all) + parseFloat(tx) + parseFloat(bx);
            }
            if((tx !="" || bx !="") && parseFloat(document.getElementById("num"+i).value) && parseFloat(document.getElementById("real_amount"+i).value))
                total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amount"+i).value);
        }
        if(target.length==2){
            if(tx !="" || bx !="" || rx !=""){
                if(tx==""){tx=0;}
                if(bx==""){bx=0;}
                if(rx==""){rx=0;}
                total_all = parseFloat(total_all) + parseFloat(tx) + parseFloat(bx) + parseFloat(rx);
            }
            if((tx !="" || bx !="" || rx !="") && parseFloat(document.getElementById("num"+i).value) && parseFloat(document.getElementById("real_amount"+i).value))
                total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amount"+i).value);
        }
        if(target.length==3){
            if(tx !="" || bx !="" || rx !=""|| ix !=""){
                if(tx==""){tx=0;}
                if(bx==""){bx=0;}
                if(rx==""){rx=0;}
                if(ix==""){ix=0;}
                total_all = parseFloat(total_all) + parseFloat(tx) + parseFloat(bx) + parseFloat(rx) + parseFloat(ix);
            }
            if((tx !="" || bx !="" || rx !=""|| ix !="") && parseFloat(document.getElementById("num"+i).value) && parseFloat(document.getElementById("real_amount"+i).value))
                total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amount"+i).value);
        }
    }
    
    if(total_all>=0)
        document.getElementById("total_all_before_sum").innerHTML = total_all.toFixed(3);
    if(total_all_after>=0)
        document.getElementById("total_all_after_sum").innerHTML = total_all_after.toFixed(3);
}

function get_real_amount(kei,discount,amount){
    var discount_amount     = Math.abs(amount * discount/100);
    var bet_after_discount  = amount - discount_amount;
    var kei_amount          = Math.abs(bet_after_discount * kei/100);
    bet_amount              = bet_after_discount + kei_amount;
    return bet_amount;
}

//3.17 vn lottery
function get_real_amount_vn_23d(counter)
{
    var target = document.getElementById('num'+counter).value;
    var pool = document.getElementById('pool').value;

    var ax = document.getElementById('amountA'+counter).value;
    var bx = document.getElementById('amountB'+counter).value;
    var cx = document.getElementById('amountC'+counter).value;
    var dx = document.getElementById('amountD'+counter).value;
    var rx = document.getElementById('amountRoll_'+counter).value;
    var r2x = document.getElementById('amountRoll2_'+counter).value;
    
    if(pool==101 || pool==102 || pool==103 || pool==104 || pool==105 || pool==106){
        if(target.length==2){
            ax = ax * 4;
            rx = rx * 32;
            r2x = r2x * 28;
        }
        if(target.length==3){
            ax = ax * 3;
            rx = rx * 25;
            r2x = r2x * 23;
        }
    }else{
        if(target.length==2){
            rx = rx * 23;
            r2x = r2x * 19;
        }
        if(target.length==3){
            rx = rx * 19;
            r2x = r2x * 17;
        }
    }
    
    var length = target.length;
    if(target!="")
    {
        var new_as = 0;
        if(ax != ""){ new_as = parseFloat(ax);}
        if(bx != ""){ new_as = parseFloat(new_as) + parseFloat(bx); }
        if(cx != ""){ new_as = parseFloat(new_as) + parseFloat(cx); }
        if(dx != ""){ new_as = parseFloat(new_as) + parseFloat(dx); }
        if(rx != ""){ new_as = parseFloat(new_as) + parseFloat(rx); }
        if(r2x != ""){ new_as = parseFloat(new_as) + parseFloat(r2x); }

        document.getElementById('real_amount'+counter).value = new_as.toFixed(3);
        if(ax < 0 || bx < 0 || cx < 0 || dx < 0 || rx < 0 || r2x < 0){
            document.getElementById('real_amount'+index).value = "";
        }
    }
    
    if(target==""){
        document.getElementById('amountA'+counter).value = "";
        document.getElementById('amountB'+counter).value = "";
        document.getElementById('amountC'+counter).value = "";
        document.getElementById('amountD'+counter).value = "";
        document.getElementById('amountRoll_'+counter).value = "";
        document.getElementById('amountRoll2_'+counter).value = "";
        
        document.getElementById('real_amount'+counter).value = "";
    }
    
    get_total_vn_23d();
}

function get_total_vn_23d()
{
    var total_all = 0;
    var total_all_after = 0;
    for(var i=1;i<=10;i++)
    {
        var target = document.getElementById('num'+i).value;

        var ax = document.getElementById('amountA'+i).value;
        var bx = document.getElementById('amountB'+i).value;
        var cx = document.getElementById('amountC'+i).value;
        var dx = document.getElementById('amountD'+i).value;
        var rx = document.getElementById('amountRoll_'+i).value;
        var r2x = document.getElementById('amountRoll2_'+i).value;

        if(ax !="" || bx !="" || cx !="" || dx !="" || rx !="" || r2x !=""){
            if(ax==""){ax=0;}
            if(bx==""){bx=0;}
            if(cx==""){cx=0;}
            if(dx==""){dx=0;}
            if(rx==""){rx=0;}
            if(r2x==""){r2x=0;}
            total_all = parseFloat(total_all) + parseFloat(ax) + parseFloat(bx) + parseFloat(cx) + parseFloat(dx) + parseFloat(rx) + parseFloat(r2x);
        }
        if((ax !="" || bx !="" || cx !="" || dx !="" || rx !="" || r2x !="") && parseFloat(document.getElementById("num"+i).value) && parseFloat(document.getElementById("real_amount"+i).value))
            total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amount"+i).value);
    }
    
    if(total_all>=0)
        document.getElementById("total_all_before_sum").innerHTML = total_all.toFixed(3);
    if(total_all_after>=0)
        document.getElementById("total_all_after_sum").innerHTML = total_all_after.toFixed(3);
}

function get_real_amount_vn_multi(counter)
{
    var target = document.getElementById('num'+counter).value;
    
    var pool = document.getElementById('pool').value;

    var ax = document.getElementById('amountA'+counter).value;
    var bx = document.getElementById('amountB'+counter).value;
    var cx = document.getElementById('amountC'+counter).value;
    var dx = document.getElementById('amountD'+counter).value;
    var rx = document.getElementById('amountRoll_'+counter).value;
    var r2x = document.getElementById('amountRoll2_'+counter).value;
    
    var amount_ax = ax;
    var amount_bx = bx;
    var amount_cx = cx;
    var amount_dx = dx;
    var amount_rx = rx;
    var amount_r2x = r2x;
    
    if(target.length<2){
        document.getElementById('amountA'+counter).value = "";
        document.getElementById('amountB'+counter).value = "";
        document.getElementById('amountC'+counter).value = "";
        document.getElementById('amountD'+counter).value = "";
        document.getElementById('amountRoll_'+counter).value = "";
        document.getElementById('amountRoll2_'+counter).value = "";
    }
    
    if(pool==101 || pool==102 || pool==103 || pool==104 || pool==105 || pool==106){
        if(target.length==2){
            ax = ax * 4;
            rx = rx * 32;
            r2x = r2x * 28;
        }
        if(target.length==3){
            ax = ax * 3;
            rx = rx * 25;
            r2x = r2x * 23;
        }
    }else{
        if(target.length==2){
            rx = rx * 23;
            r2x = r2x * 19;
        }
        if(target.length==3){
            rx = rx * 19;
            r2x = r2x * 17;
        }
    }
    
    if(ax == ""){ ax=0; }
    if(bx == ""){ bx=0; }
    if(cx == ""){ cx=0; }
    if(dx == ""){ dx=0; }
    if(rx == ""){ rx=0; }
    if(r2x == ""){ r2x=0; }
    
    var length = target.length;
    var counter_machine=0;
    var success_text = new Array();
    
    if(length==2 && (ax !="" || bx !="" || cx !="" || dx !="" || rx !="" || r2x !="") && (ax >0 || bx >0 || cx >0 || dx >0 || rx >0 || r2x >0))
    {
        for(var i=0; i<length; i++)
        {
            var first_text = target[i];
            for(var j=0; j<length; j++)
            {
                if(i != j)
                {
                    var last_text = target[j];
                    var full_text = first_text+last_text;
                    var exist = 0;
                    for(var checker = 0; checker < counter_machine; checker++)
                    {
                        if(success_text[checker] == full_text && success_text[checker].length== full_text.length)
                        {
                            exist++;
                            break;
                        }
                    }
                    if(exist == 0)
                    {
                        success_text[counter_machine] = full_text;
                        counter_machine++;
                    }
                }
            }
        }
    }
    if(length==3 && (ax !="" || bx !="" || cx !="" || dx !="" || rx !="" || r2x !="") && (ax >0 || bx >0 || cx >0 || dx >0 || rx >0 || r2x >0))
    {
        for(var i=0; i<length; i++)
        {
            var first_text = target[i];
            for(var j=0; j<length; j++)
            {
                if(j != i)
                {
                    var second_text = target[j];
                    for(var k=0; k<length; k++)
                    {
                        if(k != i && k != j)
                        {
                            var third_text = target[k];
                            var full_text = first_text+second_text+third_text;
                            var exist = 0;
                            for(var checker=0; checker<counter_machine; checker++)
                            {
                                if(success_text[checker]==full_text && success_text[checker].length==full_text.length)
                                {
                                    exist++
                                    break;
                                }
                            }
                            if(exist == 0)
                            {
                                success_text[counter_machine] = full_text;
                                counter_machine++;
                            }
                        }
                    }
                }
            }
        }
    }
    var real_amount  = 0;
    var total_amount = 0;
    for(var x_count=0; x_count<counter_machine; x_count++)
    {
        var amount  = 0;
        var bet_amount  = 0;
        var data_string = success_text[x_count];
        if(data_string.length == 2)
        {
            if(ax != 0){ bet_amount += parseFloat(ax); amount += parseFloat(amount_ax); }
            if(bx != 0){ bet_amount += parseFloat(bx); amount += parseFloat(amount_bx); }
            if(cx != 0){ bet_amount += parseFloat(cx); amount += parseFloat(amount_cx); }
            if(dx != 0){ bet_amount += parseFloat(dx); amount += parseFloat(amount_dx); }
            if(rx != 0){ bet_amount += parseFloat(rx); amount += parseFloat(amount_rx); }
            if(r2x != 0){ bet_amount += parseFloat(r2x); amount += parseFloat(amount_r2x); }
        }
        if(data_string.length == 3)
        {
            if(ax != 0){ bet_amount += parseFloat(ax); amount += parseFloat(amount_ax); }
            if(bx != 0){ bet_amount += parseFloat(bx); amount += parseFloat(amount_bx); }
            if(cx != 0){ bet_amount += parseFloat(cx); amount += parseFloat(amount_cx); }
            if(dx != 0){ bet_amount += parseFloat(dx); amount += parseFloat(amount_dx); }
            if(rx != 0){ bet_amount += parseFloat(rx); amount += parseFloat(amount_rx); }
            if(r2x != 0){ bet_amount += parseFloat(r2x); amount += parseFloat(amount_r2x); }
        }
        real_amount += parseFloat(bet_amount);
        total_amount += parseFloat(amount);
    }
    
    document.getElementById('real_amount'+counter).value = real_amount.toFixed(3);
    document.getElementById('total_amount'+counter).value = total_amount.toFixed(3);
    
    get_total_vn_multi();
}

function get_total_vn_multi()
{
    var total_all = 0;
    var total_all_after = 0;
    for(var i=1;i<=10;i++)
    {
        if(parseFloat(document.getElementById("total_amount"+i).value) )
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("total_amount"+i).value);
        if(parseFloat(document.getElementById("real_amount"+i).value))
            total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amount"+i).value);
    }
    if(total_all>=0)
        document.getElementById("total_all_before_sum").innerHTML = total_all.toFixed(3);
    if(total_all_after>=0)
        document.getElementById("total_all_after_sum").innerHTML = total_all_after.toFixed(3);
}

function get_real_amount_vn_cross(counter)
{
    var num1 = document.getElementById('num1'+counter).value;
    var num2 = document.getElementById('num2'+counter).value;
    var num3 = document.getElementById('num3'+counter).value;
    
    var pool = document.getElementById('pool').value;

    var ax = document.getElementById('amountA'+counter).value;
    var bx = document.getElementById('amountB'+counter).value;
    var cx = document.getElementById('amountC'+counter).value;
    var dx = document.getElementById('amountD'+counter).value;
    
    var amount_ax = ax;
    var amount_bx = bx;
    var amount_cx = cx;
    var amount_dx = dx;
    
    var ch_num1 = chkRepeat(num1);
    var ch_num2 = chkRepeat(num2);
    var ch_num3 = chkRepeat(num3);

    if(pool==101 || pool==102 || pool==103 || pool==104 || pool==105 || pool==106){
        if(num1.length>1 && num2.length>1 && num3.length<1){
            ax = ax * 4;
        }
        if(num1.length>1 && num2.length>1 && num3.length>1){
            ax = ax * 3;
        }
    }

    if(ax == ""){ ax=0; }
    if(bx == ""){ bx=0; }
    if(cx == ""){ cx=0; }
    if(dx == ""){ dx=0; }
    
    var length1 = num1.length;
    var length2 = num2.length;
    var length3 = num3.length;
    
    if(length1<2 || length2<2 || ch_num1>0 || ch_num2>0 || ch_num3>0){
        document.getElementById('amountA'+counter).value = "";
        document.getElementById('amountB'+counter).value = "";
        document.getElementById('amountC'+counter).value = "";
        document.getElementById('amountD'+counter).value = "";
        document.getElementById('real_amount'+counter).value = "";
        document.getElementById('total_amount'+counter).value = "";
    }else{
        var counter_machine=0;
        var success_text = new Array();

        if(length1 > 1 && length2 > 1 && length3==0)
        {
            for(var i=0; i<length1; i++)
            {
                var first_text = num1[i];
                for(var j=0; j<length2; j++)
                {
                    var second_text = num2[j];
                    var full_text = first_text + second_text;
                    
                    success_text[counter_machine] = full_text;
                    counter_machine++;

                }
            }
        }
        if(length1 > 1 && length2 > 1 && length3 > 1)
        {
            for(var i=0; i<length1; i++)
            {
                var first_text = num1[i];
                for(var j=0; j<length2; j++)
                {
                    var second_text = num2[j];
                    for(var k=0; k<length3; k++)
                    {
                        var third_text = num3[k];
                        var full_text = first_text + second_text + third_text;
                        success_text[counter_machine] = full_text;
                        counter_machine++;
                    }
                }
            }
        }

        var real_amount  = 0;
        var total_amount = 0;
        for(var x_count=0; x_count<counter_machine; x_count++)
        {
            var amount  = 0;
            var bet_amount  = 0;
            var data_string = success_text[x_count];
            if(data_string.length == 2){
                if(ax != 0){ bet_amount += parseFloat(ax); amount += parseFloat(amount_ax); }
                if(bx != 0){ bet_amount += parseFloat(bx); amount += parseFloat(amount_bx); }
                if(cx != 0){ bet_amount += parseFloat(cx); amount += parseFloat(amount_cx); }
                if(dx != 0){ bet_amount += parseFloat(dx); amount += parseFloat(amount_dx); }
            }
            if(data_string.length == 3)
            {
                if(ax != 0){ bet_amount += parseFloat(ax); amount += parseFloat(amount_ax); }
                if(bx != 0){ bet_amount += parseFloat(bx); amount += parseFloat(amount_bx); }
                if(cx != 0){ bet_amount += parseFloat(cx); amount += parseFloat(amount_cx); }
                if(dx != 0){ bet_amount += parseFloat(dx); amount += parseFloat(amount_dx); }
            }
            real_amount += parseFloat(bet_amount);
            total_amount += parseFloat(amount);
        }
        document.getElementById('real_amount'+counter).value = real_amount.toFixed(3);
        document.getElementById('total_amount'+counter).value = total_amount.toFixed(3);
      
        get_total_vn_cross();
    }
    
}

function get_total_vn_cross()
{
    var total_all = 0;
    var total_all_after = 0;
    for(var i=1;i<=10;i++)
    {
        if(parseFloat(document.getElementById("total_amount"+i).value) )
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("total_amount"+i).value);
        if(parseFloat(document.getElementById("real_amount"+i).value))
            total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amount"+i).value);
    }
    if(total_all>=0)
        document.getElementById("total_all_before_sum").innerHTML = total_all.toFixed(3);
    if(total_all_after>=0)
        document.getElementById("total_all_after_sum").innerHTML = total_all_after.toFixed(3);
}

function chkRepeat(str){
    var num=str.split("");
    var result=0;
    for(i=0;i<num.length;i++)
    {
      for(j=i+1;j<num.length;j++)
      {
        if(num[i]==num[j])
           result++;
       }
    }
    return result;
}

function get_real_amount_vn_bs_oe(counter)
{
    var pool = document.getElementById('pool').value;

    var ax = document.getElementById('amountA'+counter).value;
    var bx = document.getElementById('amountB'+counter).value;
    var cx = document.getElementById('amountC'+counter).value;
    var dx = document.getElementById('amountD'+counter).value;
    var rx = document.getElementById('amountRoll_'+counter).value;
    var r2x = document.getElementById('amountRoll2_'+counter).value;
    
    if(pool==101 || pool==102 || pool==103 || pool==104 || pool==105 || pool==106){
        ax = ax * 4;
        rx = rx * 32;
        r2x = r2x * 28;
    }else{
        rx = rx * 23;
        r2x = r2x * 19;
    }
    if(ax == ""){ ax=0; }
    if(bx == ""){ bx=0; }
    if(cx == ""){ cx=0; }
    if(dx == ""){ dx=0; }
    
    if(document.getElementById(counter+'0').checked==true || document.getElementById(counter+'1').checked==true)
    {
        var new_as = 0;
        if(ax != ""){ new_as = parseFloat(ax);}
        if(bx != ""){ new_as = parseFloat(new_as) + parseFloat(bx); }
        if(cx != ""){ new_as = parseFloat(new_as) + parseFloat(cx); }
        if(dx != ""){ new_as = parseFloat(new_as) + parseFloat(dx); }
        if(rx != ""){ new_as = parseFloat(new_as) + parseFloat(rx); }
        if(r2x != ""){ new_as = parseFloat(new_as) + parseFloat(r2x); }

        new_as = parseFloat(new_as) * 50;
        document.getElementById('real_amount'+counter).value = new_as.toFixed(3);
        if(ax < 0 || bx < 0 || cx < 0 || dx < 0 || rx < 0 || r2x < 0){
            document.getElementById('real_amount'+index).value = "";
        }
    }else{
        document.getElementById('amountA'+counter).value = "";
        document.getElementById('amountB'+counter).value = "";
        document.getElementById('amountC'+counter).value = "";
        document.getElementById('amountD'+counter).value = "";
        document.getElementById('amountRoll_'+counter).value = "";
        document.getElementById('amountRoll2_'+counter).value = "";
        
        document.getElementById('real_amount'+counter).value = "";
    }

    get_total_vn_bsoe();
}
function get_total_vn_bsoe()
{
    var total_all = 0;
    var total_all_after = 0;
    var bsoe=new Array("BigSmall","OddEven");
    for(var i=0;i<=1;i++)
    {
        if(parseFloat(document.getElementById("amountA"+bsoe[i]).value) )
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amountA"+bsoe[i]).value);
        if(parseFloat(document.getElementById("amountB"+bsoe[i]).value) )
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amountB"+bsoe[i]).value);
        if(parseFloat(document.getElementById("amountC"+bsoe[i]).value) )
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amountC"+bsoe[i]).value);
        if(parseFloat(document.getElementById("amountD"+bsoe[i]).value) )
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amountD"+bsoe[i]).value);
        if(parseFloat(document.getElementById("amountRoll_"+bsoe[i]).value) )
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amountRoll_"+bsoe[i]).value);
        if(parseFloat(document.getElementById("amountRoll2_"+bsoe[i]).value) )
            total_all = parseFloat(total_all) + parseFloat(document.getElementById("amountRoll2_"+bsoe[i]).value);
        
        if(parseFloat(document.getElementById("real_amount"+bsoe[i]).value))
            total_all_after = parseFloat(total_all_after) + parseFloat(document.getElementById("real_amount"+bsoe[i]).value);
    }
    if(total_all>=0)
        document.getElementById("total_all_before_sum").innerHTML = total_all.toFixed(3);
    if(total_all_after>=0)
        document.getElementById("total_all_after_sum").innerHTML = total_all_after.toFixed(3);
    bsoe=[];
}

function setTab(name,cursel,n){
    for(i=1;i<=n;i++){
        var nav=document.getElementById(name+i);
        var conlist=document.getElementById("con-"+name+"-"+i);
        nav.className=i==cursel?"hover":"";
        conlist.style.display=i==cursel?"block":"none";
    }
}

function hasClass(el, cls) {
  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}

function real_amount_mora(){
    var playtype=document.getElementById("play_type").value; 
    var get_disc = document.getElementById('discount_'+playtype).value; console.log(get_disc);
    var get_kei = document.getElementById('kei_'+playtype).value;
    var x = document.getElementById('bet_amount').value;
    if(x == ""){
        x=0;
    }
    var disc_amount     = Math.abs(parseFloat(x) * parseFloat(get_disc)/100);
    var bet_after_disc  = parseFloat(x) - parseFloat(disc_amount);
    var kei_amount      = Math.abs(parseFloat(x) * parseFloat(get_kei)/100);
    var real_amount     = parseFloat(bet_after_disc) + parseFloat(kei_amount);
    var new_as = real_amount.toFixed(3);
    document.getElementById('real_amount').innerHTML = new_as;
    if(x <= 0){
    document.getElementById('real_amount').innerHTML = "";
    }   
}
function Capchar(length) {
    var chars = '0123456789',
    result=""
    for (var i = length; i > 0; --i)
    result += chars[Math.round(Math.random() * (chars.length - 1))]
    return result
}