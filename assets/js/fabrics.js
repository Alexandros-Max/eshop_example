
/* ----------------------------------------------- Fabric Variants Overlay ----------------------------------------------- */
/* ----------------------------------------------- ---------------------- ----------------------------------------------- */
$(document).ready(function() {

    var selectedFabricCatName, selectedFabricCatPrice, selectedFabricVarName, selectedFabricVarImg, selectedColorImg, selectedColorID;
  
    var prodOgPrice = $('.product-essential .product-shop-content .price-box .price').html();
    
    var catname;
    
    $(".fabric-cat-single").click(function() {
      catname = $(this).closest('.fabric-cat').attr('id');
      if(!$(".fabric-categories-overlay").hasClass(catname)) {
        $('.fabric-categories-overlay').attr('class', 'fabric-categories-overlay')
        $(".fabric-categories-overlay .fabric-variants-image").css('background-image', 'none');
        $(".fabric-categories-overlay .fabric-cat-choice b").html('--');
        $(".fabric-categories-overlay .fabric-var-choice b").html('--');
        $(".fabric-categories-overlay .choice-price b").html('--');
    
        
        $("#finalizebtn").addClass('disabled');
      }
      $(".fabric-categories-overlay .overlay-content").children().remove();
      $(".fabric-categories-overlay .fabric-variants-header .fabric-category-title").children().remove();
      $(".fabric-categories-overlay .catChoiceName").children().remove();
      $(".fabric-categories-overlay").addClass("active");
      
      $(".fabric-categories-overlay").addClass(catname);
  
      $(this).find( ".fabrics-content" ).clone().appendTo(".fabric-categories-overlay .overlay-content");
      $(this).find( ".title" ).clone().appendTo( ".fabric-categories-overlay .fabric-variants-header .fabric-category-title" );
      $(this).find( ".subtitle" ).clone().appendTo( ".fabric-categories-overlay .fabric-variants-header .fabric-category-title" );
      $(this).find( ".added-price" ).clone().appendTo( ".fabric-categories-overlay .fabric-variants-header .fabric-category-title .title" );
      
      $(this).closest(".fabric-cat").find(".catName").clone().appendTo(".fabric-categories-overlay .catChoiceName");
  
      selectedFabricCatName = $(".fabric-categories-overlay .fabric-variants-header .fabric-category-title .title").html();
      selectedFabricCatPrice = $(".fabric-categories-overlay .fabric-variants-header .fabric-category-title .added-price").html();
    });
  
    $("#closeFabricVariants").click(function() {
      $(".fabric-categories-overlay").removeClass("active");
      $(".fabric-categories-overlay .overlay-content").children().remove();
      $(".fabric-categories-overlay .fabric-variants-header .fabric-category-title").children().remove();
    });
  
    $('.fabric-categories-overlay .overlay-content').on('change', function() {
      $(this).find('.fabric-variant-single').each(function() {
        if( $(this).find('input').is(':checked') ){
          selectedFabricVarName = $(this).find('h6').html();
          selectedFabricVarImg = $(this).find('img').prop('src');
          selectedColorID = $(this).find('input').attr("data-codes");
        }
      });
  
      $(".fabric-categories-overlay .fabric-variants-image").css('background-image', 'url(' + selectedFabricVarImg + ')');
  
      $(".fabric-categories-overlay .fabric-cat-choice b").html(selectedFabricCatName);
      $(".fabric-categories-overlay .fabric-var-choice b").html(selectedFabricVarName);
      $(".fabric-categories-overlay .choice-price b").html(selectedFabricCatPrice);
      $("#finalizebtn").removeClass('disabled');
    });
    
    $("#resetbtn").click(function() {
      $('.' + catname).find(".fabric-variants-image").css('background-image', 'none');
      $('.' + catname).find(".fabric-cat-choice b").html('--');
      $('.' + catname).find(".fabric-var-choice b").html('--');
      $('.' + catname).find(".choice-price b").html('--');
  
      
      $('.' + catname).find("#finalizebtn").addClass('disabled');
      $('#' + catname).find(".fabric-cats-container").removeClass('hidden-cats');
      $('#' + catname).find(".fabric-seemore").addClass('minus');
      $('#' + catname).find(".fabric-seemore").css('display', 'none');
      $('#' + catname).find(".fabric-result").css('display', 'none');
      $('#' + catname).find(".fabric-result-content input.color-input").val('');
      $('#' + catname).find(".fabric-result-content input.color-input").attr('data-codes','');
    });
    
    $("#finalizebtn").click(function() {
      if (!$("#finalizebtn").hasClass('disabled')){
        
        $('#' + catname).find(".fabric-cats-container").addClass('hidden-cats');
        $('#' + catname).find(".fabric-seemore").removeClass('minus');
        $('#' + catname).find(".fabric-seemore").css('display', 'block');
        $('#' + catname).find(".fabric-result").css('display', 'block');
        $(".fabric-categories-overlay").removeClass("active");
  
        $('#' + catname).find(".fabric-result-content .fabric-result-img img").prop('src', selectedFabricVarImg);
        $('#' + catname).find(".fabric-result-content .cat").html(selectedFabricCatName);
        $('#' + catname).find(".fabric-result-content .color").html(selectedFabricVarName);
        $('#' + catname).find(".fabric-result-content input.color-input").val(selectedColorID);
        $('#' + catname).find(".fabric-result-content input.color-input").attr('data-codes',selectedColorID);
      }
    });
    
    $(".fabric-seemore").click(function() {
      
      var cattype = $(this).closest('.fabric-cat').attr('id'); 
      if ($('#' + cattype).find(".fabric-cats-container").hasClass('hidden-cats')){
        $('#' + cattype).find(".fabric-seemore").addClass('minus');
        $('#' + cattype).find(".fabric-cats-container").removeClass('hidden-cats');
      } else {
        $('#' + cattype).find(".fabric-seemore").removeClass('minus');
        $('#' + cattype).find(".fabric-cats-container").addClass('hidden-cats');
      }
  
    });
    
    $('.fabric-categories-overlay').on("click", function (e) {
      e.target === this && $('.fabric-categories-overlay').removeClass('active');
    });
  });