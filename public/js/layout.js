  $(window).on('resize', function(){
    responsiveMenuDash();
  });

  function responsiveMenuDash(){
      var win = $(this); 
      if (win.width() <= 640) { 
        $('#currOpt').html('<i class="fa fa-home"></i>');
        $('#currOpt2').html('<i class="fa fa-usd"></i>');
        $('#currOpt3').html('<i class="fa fa-clock-o"></i>');
        $('#currOpt4').html('<i class="fa fa-user"></i>');

        $('#boxCurrOpt3').attr('style','padding-right:5px');
        $('.XLPadLeft').attr('style', 'padding-right:0px');
        $('#boxCurrOpt4').attr('style','padding-left:0px;padding-right0px !important;');
      }else{
        $('#currOpt').html('Home');
        $('#currOpt2').html('Movimento');
        $('#currOpt3').html('Historico');
        $('#currOpt4').html('Conta');

        $('#boxCurrOpt3').attr('style','padding-right:15px');
        $('#boxCurrOpt4').attr('style','padding-left:15px');
      }
  }

  responsiveMenuDash();

  function setPath(path){

    var infoGerais = ['Home','Minha Conta','Informações Gerais'];
    var infoIcons = ['fa fa-dashboard','fa fa-home','fa fa-info'];

    var movDep = ['Home', 'Movimento', 'Depósito'];
    var DepIcons = ['fa fa-dashboard','fa fa-usd','fa fa-envelope-o'];

    var movSaq = ['Home','Movimento','Saque'];
    var SaqIcons = ['fa fa-dashboard','fa fa-usd','fa fa-money'];

    var HisApo = ['Home','Histórico','Apostas'];
    var HisApoIcons = ['fa fa-dashboard','fa fa-clock-o','fa fa-hand-peace-o'];

    var HisDeps = ['Home','Histórico','Depósitos'];
    var HisDepsIcons = ['fa fa-dashboard','fa fa-clock-o','fa fa-envelope-o'];

    var HisSaqs = ['Home','Histórico','Saques'];
    var HisSaqsIcons = ['fa fa-dashboard','fa fa-clock-o','fa fa-money'];

    var ConAcc = ['Home','Conta','Acessos'];
    var ConAccIcons = ['fa fa-dashboard','fa fa-user','fa fa-check-circle-o'];

    var ConDet = ['Home','Conta','Detalhes'];
    var ConDetIcons = ['fa fa-dashboard','fa fa-user','fa fa-user-plus'];

    var pathDic = {"Informações Gerais" : infoGerais,
                  "Depósito" : movDep,
                  "Saque" : movSaq,
                  "Apostas" : HisApo,
                  "Depósitos" : HisDeps,
                  "Saques" : HisSaqs,
                  "Acessos" : ConAcc,
                  "Detalhes" : ConDet};

    var iconDic = {"Informações Gerais" : infoIcons,
                  "Depósito" : DepIcons,
                  "Saque" : SaqIcons,
                  "Apostas" : HisApoIcons,
                  "Depósitos" : HisDepsIcons,
                  "Saques" : HisSaqsIcons,
                  "Acessos" : ConAccIcons,
                  "Detalhes" : ConDetIcons};

    var new_path = iconsPath = [];  

    new_path = pathDic[path];
    icons_path = iconDic[path];

    $('.breadcrumb').html('');

    for(var i = 0; i < new_path.length; i++){
      $('.breadcrumb').append('<li><i class="'+icons_path[i]+'"></i> '+new_path[i]+'</li>');
    }


  }

  $(".opcoesMenu").on("mouseenter", function(){
    $(this).addClass('open');
    $(this).attr('aria-expanded',true);
  });

  $(".opcoesMenu").on("mouseleave", function(){
    $(this).removeClass('open');
  });

  $(".opcoesMenu").on("click", function(){
    $(this).removeClass();
    $(this).addClass('dropdown');
    $('#dropMenu,#dropMenu2,#dropMenu3,#dropMenu4').removeClass('activeMenu');
    $(this).parent().children(':first-child').addClass('activeMenu');
  });

