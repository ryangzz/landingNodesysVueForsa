<template>
    <section class="contact-us  mega-section section-bg-shade" id="contact-us" style="min-height: 600px; contain: layout;">
        <div class="container">
            <div class="section-heading center-heading">
                <h2 class="section-title2 wow" data-splitting="chars">
                    Contáctanos
                </h2>
                <p class="section-subtitle wow fadeInUp" data-wow-delay=".5s">¡Queremos conocer tus ideas! Comparte con nosotros y hagamos algo increíble juntos.</p>
                <div class="line line-solid-main-color wow fadeIn" data-wow-delay="1s"></div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-9  mx-auto wow fadeInUp" data-wow-delay="0.4s">
                    <!--Form To have user messages-->
                    <div class="main-form-wraper">
                        <form class="main-form" id="contact-us-form" method="post" action="https://api.web3forms.com/submit"
                            autocomplete="off">
                            <input type="hidden" name="access_key" value="9f1456ea-5d9c-43a6-8c36-6df8545ead4b">
                            <input type="hidden" name="redirect" value="https://kernesys.com">     
                                                   <div class="row ">
                                <div class="col-12 col-lg-6">
                                    <div class="input-wraper">
                                        <input class="text-input" id="user-name" name="name" type="text">
                                        <label for="user-name"> Nombre<span class="req">*</span>
                                        </label><span class="b-border"></span><i></i><span class="error-msg"></span>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="input-wraper">
                                        <input class="text-input" id="user-email" name="email" type="email">
                                        <label for="user-email"> Correo<span class="req">*</span>
                                        </label><span class="b-border"></span><i></i><span class="error-msg"></span>
                                    </div>
                                </div>   
                                <div class="col-12 col-lg-12">
                                    <div class="input-wraper">
                                        <input class="text-input" id="msg-subject" name="msg-subject" type="text">
                                        <label for="msg-subject"> Asunto<span class="req">*</span>
                                        </label><span class="b-border"></span><i></i><span class="error-msg"></span>
                                    </div>
                                </div> 
                                <div class="col-12 ">
                                    <div class="input-wraper">
                                        <textarea class=" text-input" id="msg-text" name="message"></textarea>
                                        <label for="msg-text"> Tu mensaje<span class="req">*</span>
                                        </label><span class="b-border"></span><i></i><span class="error-msg"> </span>
                                    </div>
                                </div>
                                <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
                                <div class="col-6 submit-wraper">
                                    <button class=" ma-btn-primary" id="submit-btn" type="submit">Enviar
                                    </button>
                                </div>
                                <div class="col-6 ">
                                    <p class="done-msg"> </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>