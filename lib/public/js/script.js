/* Author: Sage Vann
   Date: October 19, 2011
*/
var def = {}
def.A = 0
def.B = 0
def.C = 0
def.D = 0
def.T = 0
def.avail = function(){
  return 100 - def.T
}
def.total = function(){
  p = parseInt
  return this.T = p(this.A) + p(this.B) + p(this.C) + p(this.D)
}

def.init = function(){
  this.A =  parseInt($('#default_a').val())
  this.B =  parseInt($('#default_b').val())  
  this.C =  parseInt($('#default_c').val())
  this.D =  parseInt($('#default_d').val())  
  this.total()
}
  
  
$(function() {
$('#save').click( sendData )


$('#slider_A').slider(
  {
    range: "max",
     value:3,
     min: 0,
     max: 100,
     step: 1,
     slide: function( event, ui ) {
      $( "#default_a" ).text( ui.value );
      }
  });






$('input[type=number]').click( function(){
  var v = $(this);
  if( def.avail > 0 )
  {  
    def[v.attr( 'data-name') ] = v.val();
    $('#default_total').text( def.total() )
  }else{
    $(this).val( $(this).val() - 1 ); }
})

$.ajax({
    
    url: 'jsonp',
    dataType: 'jsonp',
    success: function( data, ts, xhr){
        $('#default_a').text( data.default.A )                  
        $('#default_b').val( data.default.B )                  
        $('#default_c').val( data.default.C )                  
        $('#default_d').val( data.default.D )                  
        def.init()
        $('#default_total').text( def.T)
    }
});


});

function getData( ){
  var data = 
    'default:A=' + $('#default_a').val( )                  
    + 'B=' + $('#default_b').val( )                  
    + 'C=' + $('#default_c').val( )                  
    + 'D=' + $('#default_d').val( )                  
  return data;
}

function sendData( ){
  $.ajax({
    url: 'api',
    type: 'POST',
    data: getData(),
    success: function(){ alert('got it');}
  });

}











