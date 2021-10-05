 

        $("#btnSubmit").click(function() {

            var n=1;

            $(this).prop("disabled", true); //deshabilitamos el botón
            $(this).html(
            `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Cargando Datos` //añadimos el spinner
            );

            $.ajax ({
                type:"POST",
                url:"procesa_numero.php",
                datatype:{"n":"n"},
                success: function (a) {
                    if (a=2){
                        $("#btnSubmit").prop("disabled", false); 
                        $("#btnSubmit").html(
                        `<span></span> Datos Cargados` //añadimos el spinner
                        );
                        $("#btnSubmit").removeClass('btn-primary').addClass('btn-success');
                        console.log(a)
                    }
                    
                },

            });
            
        });