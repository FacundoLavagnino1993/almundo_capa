angular.module("module-a")
.directive('miDirectiva',miDirectiva)

	function miDirectiva(){

		return {
			template{"<p>Hola</p>"}
			controller: function($scope){
				//logica
			}
			scope{}
		}
	}