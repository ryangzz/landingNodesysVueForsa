<template>
    <section class="contact-us  mega-section section-bg-shade" id="contact-us">
        <div class="container">
            <div class="section-heading center-heading">
                <h2 class="section-title2 wow words chars splitting animated" data-splitting="chars"
                    style="--word-total: 3; --char-total: 16; visibility: visible;">
                    <span class="word" data-word="Envíanos" style="--word-index: 0;">
    <span class="char" data-char="E" style="--char-index: 0;">C</span>
    <span class="char" data-char="n" style="--char-index: 1;">O</span>
    <span class="char" data-char="v" style="--char-index: 2;">N</span>
    <span class="char" data-char="í" style="--char-index: 3;">T</span>
    <span class="char" data-char="a" style="--char-index: 4;">A</span>
    <span class="char" data-char="n" style="--char-index: 5;">C</span>
    <span class="char" data-char="o" style="--char-index: 6;">T</span>
    <span class="char" data-char="s" style="--char-index: 7;">A</span>
</span>
<span class="whitespace"> </span>
<span class="word" data-word="un" style="--word-index: 1;">
    <span class="char" data-char="u" style="--char-index: 8;">N</span>
    <span class="char" data-char="n" style="--char-index: 9;">O</span>
</span>
<span class="whitespace"> </span>
<span class="word" data-word="mensaje" style="--word-index: 2;">
    <span class="char" data-char="m" style="--char-index: 10;">S</span>
</span>
                </h2>
                <p class="section-subtitle wow fadeInUp" data-wow-delay=".5s"
                    style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">¡Queremos conocer tus ideas! Comparte con nosotros y hagamos algo increíble juntos.</p>
                <div class="line line-solid-main-color wow fadeIn" data-wow-delay="1s"
                    style="visibility: visible; animation-delay: 1s; animation-name: fadeIn;"></div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-9  mx-auto wow fadeInUp" data-wow-delay="0.4s"
                    style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
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