var types = [
			{"name":"Normal",
			 "color":"#a8a878"},
			{"name":"Fire",
			 "color":"#f08030 "},
			{"name":"Water",
			 "color":"#6890f0 "},
			{"name":"Electric",
			 "color":"#f8d030 "},
			{"name":"Grass",
			 "color":"#78c850 "},
			{"name":"Ice",
			 "color":"#98d8d8 "},
			{"name":"Fighting",
			 "color":"#c03028"},
			{"name":"Poison",
			 "color":"#a040a0 "},
			{"name":"Ground",
			 "color":"#e0c068 "},
			{"name":"Flying",
			 "color":"#a890f0 "},
			{"name":"Psychic",
			 "color":"#f85888 "},
			{"name":"Bug",
			 "color":"#a8b820 "},
			{"name":"Rock",
			 "color":"#b8a038 "},
			{"name":"Ghost",
			 "color":"#705898 "},
			{"name":"Dragon",
			 "color":"#7038f8 "},
			{"name":"Dark",
			 "color":"#705848 "},
			{"name":"Steel",
			 "color":"#b8b8d0 "},
			{"name":"Fairy",
			 "color":"#ee99ac "}];
types[-1] = {"name":"","color":""};

var typeChart = [
	[1,	1,	1,	1,	1,	1,	2,	1,	1,	1,	1,	1,	1,	0,	1,	1,	1,	1],
	[1,	0.5,	2,	1,	0.5,	0.5,	1,	1,	2,	1,	1,	0.5,	2,	1,	1,	1,	0.5,	0.5],
	[1,	0.5,	0.5,	2,	2,	0.5,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0.5,	1],
	[1,	1,	1,	0.5,	1,	1,	1,	1,	2,	0.5,	1,	1,	1,	1,	1,	1,	0.5,	1],
	[1,	2,	0.5,	0.5,	0.5,	2,	1,	2,	0.5,	2,	1,	2,	1,	1,	1,	1,	1,	1],
	[1,	2,	1,	1,	1,	0.5,	2,	1,	1,	1,	1,	1,	2,	1,	1,	1,	2,	1],
	[1,	1,	1,	1,	1,	1,	1,	1,	1,	2,	2,	0.5,	0.5,	1,	1,	0.5,	1,	2],
	[1,	1,	1,	1,	0.5,	1,	0.5,	0.5,	2,	1,	2,	0.5,	1,	1,	1,	1,	1,	0.5],
	[1,	1,	2,	0,	2,	2,	1,	0.5,	1,	1,	1,	1,	0.5,	1,	1,	1,	1,	1],
	[1,	1,	1,	2,	0.5,	2,	0.5,	1,	0,	1,	1,	0.5,	2,	1,	1,	1,	1,	1],
	[1,	1,	1,	1,	1,	1,	0.5,	1,	1,	1,	0.5,	2,	1,	2,	1,	2,	1,	1],
	[1,	2,	1,	1,	0.5,	1,	0.5,	1,	0.5,	2,	1,	1,	2,	1,	1,	1,	1,	1],
	[0.5,	0.5,	2,	1,	2,	1,	2,	0.5,	2,	0.5,	1,	1,	1,	1,	1,	1,	2,	1],
	[0,	1,	1,	1,	1,	1,	0,	0.5,	1,	1,	1,	0.5,	1,	2,	1,	2,	1,	1],
	[1,	0.5,	0.5,	0.5,	0.5,	2,	1,	1,	1,	1,	1,	1,	1,	1,	2,	1,	1,	2],
	[1,	1,	1,	1,	1,	1,	2,	1,	1,	1,	0,	2,	1,	0.5,	1,	0.5,	1,	2],
	[0.5,	2,	1,	1,	0.5,	0.5,	2,	0,	2,	0.5,	0.5,	0.5,	0.5,	1,	0.5,	1,	0.5,	0.5],
	[1,	1,	1,	1,	1,	1,	0.5,	2,	1,	1,	1,	0.5,	1,	1,	0,	0.5,	2,	1]

];

var animations = ["wrench","ring","horizontal","vertical","bounce","float","shake","tada"];


var defenseDB = [{"text":"Higher<br><b>DEF</b>","clas":"defense-DEF"},{"text":"Higher<br><b>SpD</b>","clas":"defense-SpD"},{"text":"<b>Equal</b><br>D&SpD","clas":"defense-EQ"}];


$(function() {	
	
	var leng = pokemonDB.length;
	//leng=1;
	$("#poke-search").val("");
	for(var i=0;i<leng;i++){
		
		var clone = $("#pokemon-original").clone().attr("id",i);

		clone.find(".number").html(nationalNumber(pokemonDB[i].Nat));

		var pkmImage = ("000" + pokemonDB[i].Nat).slice(-4);

		clone.find(".image").attr("src","src/pkm/pkm-"+ pkmImage +".png");
		
		clone.find(".name").html("" + (pokemonDB[i].Form).toLowerCase());
		
		clone.find(".type-1").html("" + types[pokemonDB[i].Type1].name);	
		clone.find(".type-1").css("background",types[pokemonDB[i].Type1].color);
		
		clone.find(".type-2").html("" + types[pokemonDB[i].Type2].name);
		clone.find(".type-2").css("background",types[pokemonDB[i].Type2].color);
		
		var defend = 0;
		
		if(parseInt(pokemonDB[i].stat4) > parseInt(pokemonDB[i].stat2))
			defend = 1;
		else if(parseInt(pokemonDB[i].stat4) == parseInt(pokemonDB[i].stat2))
			defend = 2;
		
		clone.find(".defenses").html("" + defenseDB[defend].text);
		clone.find(".defenses").addClass(defenseDB[defend].clas);
		
		clone.appendTo($("#selector-pokemon"));
		
		if(i==(leng-1)){
			setTimeout(function(){
								
				$("#loading-container").remove();
				$("#selector-pokemon").show();
			},500);
			
		}
	}
	
	$("#poke-search").on("input",function(){
		
		closeResult();
		 $("html, body").animate({
			scrollTop: 0
		}, 150);
		var name = ($(this).val()).toLowerCase();
		
		if(name == ""){
			
			$("#poke-search-sign").children().removeClass("fa-times");
			$("#poke-search-sign").children().addClass("fa-search");
		}
		else{
			
			$("#poke-search-sign").children().addClass("fa-times");
			$("#poke-search-sign").children().removeClass("fa-search");
		}
		
		setTimeout(function(){
			$('.pokemon:contains("'+ name +'")').css("display","block");
		
			$('.pokemon').not(':contains("'+ name +'")').css("display","none");
		},200);
	});
	
	$("#poke-search-sign").children().on("click",function(){
		$("#poke-search").val("");
		$("#poke-search").trigger("input");
	});
	
	var pokemons = $(".pokemon");
	pokemons.on("click",function(){
		
		newPokemon(this.id);
		
		
	});
	pokemons.on("mouseenter", function(e) {
	  $(e.target).find(".image").addClass("animated faa-" + animations[ Math.floor(Math.random() * (animations.length -1)) ]);
	});	
	pokemons.on("mouseleave",function(e) {
	  $(e.target).find(".image").attr("class","image");
	});

	$(".result").on("click",function(e){
		
		if( e.target != this ) 
			return false;
		
		
		closeResult();
	});
	
	$(".selection-back").on("click",function(){
		closeResult();
	});
	
	
	$("#pokemon-original").remove();
	
		
});

function newPokemon(i){


		var pkmImage = ("000" + pokemonDB[i].Nat).slice(-4);
		$(".result").find(".number").html(nationalNumber(pokemonDB[i].Nat));
		$(".result").find(".image").attr("src","src/pkm/pkm-"+pkmImage+".png");
		var clas = "image animated faa-"+animations[ Math.floor(Math.random() * (animations.length -1)) ];
		
		$(".result").find(".image").attr("class",clas);
		
		$(".result").find(".name").html("" + (pokemonDB[i].Form).toLowerCase());
		
		$(".result").find(".type-1").html("" + types[pokemonDB[i].Type1].name);	
		$(".result").find(".type-1").css("background",types[pokemonDB[i].Type1].color);
		
		$(".result").find(".type-2").html("" + types[pokemonDB[i].Type2].name);
		$(".result").find(".type-2").css("background",types[pokemonDB[i].Type2].color);
	
		
		var defend = 0;
		
		if(parseInt(pokemonDB[i].stat4) > parseInt(pokemonDB[i].stat2))
			defend = 1;
		else if(parseInt(pokemonDB[i].stat4) == parseInt(pokemonDB[i].stat2))
			defend = 2;
		
		$(".result").find(".defenses").html("" + defenseDB[defend].text);
		$(".result").find(".defenses").attr("class",("defenses "+defenseDB[defend].clas));
		
		$("td").removeClass("td-higher");
		$("td").removeClass("td-lower");
		
		
		$("#stats-table").find("tbody").children("tr").children("td").each(function(e){
			
			$(this).html(pokemonDB[i]["stat"+e]);
			
			if(pokemonDB[i]["stat2"] < pokemonDB[i]["stat4"]){
				if(e == 2){
					$("#stats-table").find("thead").children("tr").children("td").eq(e).addClass("td-lower");
					$(this).addClass("td-lower");
				}					
				if(e == 4){
					$("#stats-table").find("thead").children("tr").children("td").eq(e).addClass("td-higher");
					$(this).addClass("td-higher");	
				}							
			}
			
			if(pokemonDB[i]["stat2"] > pokemonDB[i]["stat4"]){
				if(e == 2){
					$("#stats-table").find("thead").children("tr").children("td").eq(e).addClass("td-higher");
					$(this).addClass("td-higher");
				}					
				if(e == 4){
					
					$("#stats-table").find("thead").children("tr").children("td").eq(e).addClass("td-lower");
					$(this).addClass("td-lower");
				}							
			}
			
		});
		
		$(".effective").css("display","none");
		
		calcTypes(i);
		
		console.log(window.outerHeight)
		
		if(window.outerHeight > 600){
			$("#pokemon-result").attr("style", "transform: scale(" + (window.outerHeight / 700) + "");
		}
		$(".result").addClass("result-show");
}

function closeResult(){
	
		$(".result").removeClass("result-show");
}

function calcTypes(id){
	
	
	$(".result-types").remove();
	
		for(var j=0;j<typeChart[pokemonDB[id].Type1].length;j++){
			
			var effectiveness1 = typeChart[pokemonDB[id].Type1][j];
			var effectiveness2 = -1;
			
			if(pokemonDB[id].Type2 != -1)
				effectiveness2 = typeChart[pokemonDB[id].Type2][j];				
						
						
			if(effectiveness2 != -1){
				if(effectiveness1 == 2 && effectiveness2 == 2)				
				appendType("hyper",j);
			
			
				if(effectiveness1 == 2 && effectiveness2==1)				
					appendType("super",j);		
				if(effectiveness1 == 1 && effectiveness2==2)				
					appendType("super",j);
				
				
				if(effectiveness1 == 0.5 && effectiveness2==1)				
					appendType("not-very",j);		
				if(effectiveness1 == 1 && effectiveness2==0.5)				
					appendType("not-very",j);	
				
				if(effectiveness1 == 0.5 && effectiveness2==0.5)				
					appendType("almost",j);
				
					
				if(effectiveness1 == 0 || effectiveness2==0)				
					appendType("no-effect",j);
				
			}
			else{
				if(effectiveness1 == 2)				
					appendType("super",j);				
				
				if(effectiveness1 == 0.5)				
					appendType("not-very",j);				
				
				if(effectiveness1 == 0)				
					appendType("no-effect",j);
				
				
			}
			
			
		}
	
	
	
}

function appendType(type,num){
	$("#"+type).css("display","block");
	$("#"+type).append("<div class='type-1 result-types' style='background:"+ types[num].color + "'>"+types[num].name+"</div>");
			
}

function nationalNumber(nat){
	var natNumber = "" + nat;	
	for(var i=0;i<(3-nat.length);i++)
		natNumber = "0" + natNumber;
	
	return "#" + natNumber;
}

