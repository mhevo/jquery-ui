/* Portuguese initialisation for the jQuery UI date picker plugin. */
( function( factory ) {
	"use strict";

	factory( jQuery.datepicker );
} )( function( datepicker ) {
"use strict";

datepicker.regional.pt = {
	closeText: "Fechar",
	prevText: "Anterior",
	nextText: "Seguinte",
	currentText: "Hoje",
	monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
	"Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
	monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
	"Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
	dayNames: [
		"Domingo",
		"Segunda-feira",
		"Terça-feira",
		"Quarta-feira",
		"Quinta-feira",
		"Sexta-feira",
		"Sábado"
	],
	dayNamesShort: [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb" ],
	dayNamesMin: [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb" ],
	weekHeader: "Sem",
	dateFormat: "dd/mm/yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.pt );

return datepicker.regional.pt;

} );
