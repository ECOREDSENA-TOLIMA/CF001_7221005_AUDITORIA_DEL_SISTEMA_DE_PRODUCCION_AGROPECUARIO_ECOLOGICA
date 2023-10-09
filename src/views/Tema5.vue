<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Normativa

    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/tema5-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El proceso de producción ecológica se basa en considerar la salud y fertilidad del suelo como factores primordiales para la producción de alimentos. En este enfoque, se busca reducir el uso de insumos químicos y promover prácticas que aseguren la calidad a lo largo de toda la cadena de producción de alimentos ecológicos.
          br
          br
          | En Colombia, existen regulaciones específicas relacionadas con la producción de alimentos ecológicos u orgánicos. Para que un producto sea reconocido como ecológico en el mercado colombiano, debe cumplir con la Resolución 0187/06 del Ministerio de Agricultura y Desarrollo Rural. Esta resolución establece los reglamentos para la producción primaria, procesamiento, empacado, etiquetado, almacenamiento, certificación, importación, comercialización y el sistema de control de productos agropecuarios ecológicos. Estos controles son realizados por organismos de control acreditados por la ONAC (Organismo Nacional de Acreditación de Colombia).

    p.mb-5(data-aos="fade-down") El sello ecológico es una garantía para los consumidores de que los productos cumplen con la normativa ambiental y son producidos de manera ecológica y sostenible. Esto proporciona confianza en la calidad y origen de los alimentos, lo que es importante tanto para los productores como para los consumidores conscientes del medio ambiente y la salud.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4
          p #[b Para recordar]
          p.mb-0 Esta normativa ecológica es la encargada de regular la producción primaria, el procesamiento hasta la comercialización de los diferentes productos alimenticios que se rigen bajo los estándares de agricultura orgánica, bien sea para su comercialización a nivel nacional o a nivel internacional. 

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Sello alimento ecológico

    p.mb-5(data-aos="fade-down") Un alimento se puede entender como un producto o sustancia que, por sus características, sus componentes o su preparación, forma parte de los hábitos alimenticios de los seres vivos. Dependiendo de la procedencia de los alimentos, estos pueden agruparse de diversas maneras, como se muestra a continuación:

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down-left")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.col-ipad
          .col-md-6.mb-4.mb-md-0
            h4 Alimentos naturales
            p Son aquellos que han crecido y se han desarrollado de forma natural, sin intervención significativa del ser humano. Aunque en algunos casos se puedan utilizar pesticidas o sustancias químicas para protegerlos de enfermedades o plagas, en general, su producción se basa en prácticas que respetan el entorno y el ciclo de vida de los alimentos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-2.png', alt='')
        .row.justify-content-center.align-items-center.col-ipad
          .col-md-6.mb-4.mb-md-0
            h4 Alimentos ecológicos
            p Son los que se han desarrollado mediante el uso de tecnologías agroecológicas, teniendo en cuenta los parámetros de diversificación de especies y promoviendo la mejora de los componentes del suelo.
            p Esto se hace mediante el control biológico de enfermedades y plagas sin utilizar productos químicos, por lo tanto, son alimentos que pretenden cuidar el medio ambiente y la salud humana. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-3.png', alt='')
        .row.justify-content-center.align-items-center.col-ipad
          .col-md-6.mb-4.mb-md-0
            h4 Alimentos transgénicos
            p Estos alimentos son el resultado de procesos de ingeniería genética, por el cual se han modificado sus genes para engendrar nuevas cualidades que los hagan resistentes a herbicidas, plagas, enfermedades y demás adversidades del entorno en el que se desarrolle su producción.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-4.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-5(data-aos="fade-down-left")
        figure
          img(src='@/assets/curso/temas/tema5/tema5-5.svg', alt='')
      .col-md-7(data-aos="fade-down-right")
        p Los productos agropecuarios ecológicos y orgánicos son aquellos que se cultivan y producen siguiendo prácticas agrícolas y ganaderas que no involucran el uso de fertilizantes químicos, herbicidas, pesticidas u otras sustancias tóxicas que puedan tener efectos negativos en la salud humana o en el medio ambiente. Estas prácticas están diseñadas para garantizar la seguridad alimentaria, el bienestar de los animales y la protección del medio ambiente.
        p El sello único de alimento ecológico del Ministerio de Agricultura y Desarrollo Rural (MADR), regido por la Resolución 00148 del 2004 tiene como objetivo promover la producción, comercialización y consumo de alimentos obtenidos a través de sistemas de producción ecológica. Proporciona a los consumidores información confiable y suficiente para distinguir entre productos convencionales y productos ecológicos. Esto contribuye a fomentar prácticas más sostenibles y respetuosas con el medio ambiente en la agricultura y la producción de alimentos, como se muestra a continuación:

    PasosA.color-primario.mb-5(tipo="l" data-aos="fade-down-right")
      .row.justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          h3 Demanda nacional e internacional
          p Que existe una demanda nacional e internacional cada vez mayor de productos agropecuarios primarios y elaborados, obtenidos por sistemas de producción ecológica que haga necesario establecer un marco reglamentario y armonizado con las normas internacionales.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/tema5-6.png', alt='')
      .row.justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/tema5-7.png', alt='')
        .col-md-6
          h3 Apoyo al sector de producción
          p Que es necesario apoyar al sector de la producción agropecuaria ecológica, buscando diferenciar y posicionar los productos ecológicos dentro de todos los eslabones de la cadena productiva. 
      .row.justify-content-center.align-items-center
        .col-md-6
          h3 Comercialización internacional
          p Que la comercialización de productos agropecuarios ecológicos está enmarcada a nivel mundial por sistemas de inspección y certificación que garantizan la calidad de los productos, a través de sellos o etiquetas especiales.
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/tema5-8.png', alt='')
      .row.justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/tema5-9.png', alt='')
        .col-md-6
          h3 Percepción de consumidores
          p Que sea importante para la percepción de los consumidores, contar con un sello que recoja un mínimo de información homogénea que diferencie al producto ecológico.
      .row.justify-content-center.align-items-center
        .col-md-6
          h3 Constitución Política de Colombia
          p Que el artículo 78 de la Constitución Política de 1991, señala los derechos de los consumidores a ser informados sobre las características de los bienes y servicios que se ofertan.
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/tema5-10.png', alt='')
      .row.justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/tema5-11.png', alt='')
        .col-md-6
          h3 Importancia del sello nacional
          p Que el uso de un sello nacional facilita una mejor identificación de los productos y propicia una mayor credibilidad y confianza entre los consumidores.

    p.mb-4(data-aos="fade-down") La Resolución 0187 de 2006 del Ministerio de Agricultura y Desarrollo Rural de Colombia adopta un reglamento que abarca varios aspectos relacionados con la producción de alimentos agropecuarios ecológicos. Esta normativa está armonizada con estándares internacionales y establece pautas para la producción primaria, procesamiento, empacado, etiquetado, almacenamiento, certificación, importación y comercialización de estos productos. Además, crea un sistema de control destinado a garantizar que los productos agropecuarios ecológicos cumplan con los requisitos y normas establecidos.
    p.mb-5(data-aos="fade-down") La Resolución 0187 de 2006 busca promover y regular la producción y comercialización de alimentos obtenidos a través de sistemas de producción ecológica en Colombia, con el fin de proteger la salud de los consumidores, el bienestar de los animales y el medio ambiente, al tiempo que brinda transparencia y confianza en el mercado de productos agropecuarios ecológicos.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4
          p #[b Para recordar]
          p.mb-0 Por lo anterior, la certificación es un proceso de verificación, realizado por empresas certificadoras en forma imparcial e independiente, registradas ante el Ministerio, para demostrar el cumplimiento por parte de productores de la Resolución 187/06.

    p.mb-5(data-aos="fade-down") A continuación, se mencionan las diferentes empresas certificadoras en Colombia, las cuales están en condición de otorgar sellos ecológicos a los productores agroecológicos, que cumplan con los estándares establecidos: 
    
    ul.lista-ul.mb-3.ms-4.mb-4(data-aos="fade-down-left")
      li 
        i.fas.fa-circle
        | Biotrópico.
      li 
        i.fas.fa-circle
        | CCI.
      li 
        i.fas.fa-circle
        | Cotecna.
      li 
        i.fas.fa-circle
        | BCS OKO #[em #[b Garantie]] Colombia. 
      li 
        i.fas.fa-circle
        | SGS Colombia.
      li 
        i.fas.fa-circle
        | ECOCERT Colombia. 
      li 
        i.fas.fa-circle
        | Control Unión Colombia. 
      li 
        i.fas.fa-circle
        | CERES Colombia. 

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4
          p.mb-0 Para aprender más sobre el tema sobre productos agroecológicos, le invito a revisar el video. ¿Cómo reconocer un producto agroecológico?, el cual se encuentra ubicado en la sección de material complementario.

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Reglamento para la producción primaria

    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/tema5-12.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-md-5
        p.mb-0 Este documento se desarrolló teniendo en cuenta la importancia de los sistemas de producción ecológica para garantizar la sostenibilidad y la renovabilidad de los recursos naturales. Uno de los principales objetivos de estos sistemas es mejorar la calidad del ambiente al limitar el uso de tecnologías, fertilizantes, plaguicidas y otros productos químicos que puedan tener impactos negativos en el medio ambiente y la salud humana.

    p.mb-5(data-aos="fade-down") A su vez, se debe tener en cuenta la demanda nacional e internacional que existe de productos agropecuarios primarios que sean obtenidos en sistemas de producción ecológica, por lo anterior se llevó a cabo este marco reglamentario donde participaron representantes de varias entidades, entre las cuales se cuenta con:  
    
    ul.lista-ul.mb-3.ms-4.mb-4(data-aos="fade-down-left")
      li 
        i.fas.fa-circle
        | Productores.
      li 
        i.fas.fa-circle
        | Entidades del Estado.
      li 
        i.fas.fa-circle
        | El sector académico.
      li 
        i.fas.fa-circle
        | Las entidades certificadoras.
      li 
        i.fas.fa-circle
        | Cooperación internacional y, en general, el sector productivo ecológico.
        
    p.mb-5(data-aos="fade-down") Este documento conjunto se elaboró con el propósito de establecer un marco normativo que se adapte a las condiciones específicas de Colombia, al tiempo que sea equivalente a las normas internacionales en el ámbito de la producción agropecuaria ecológica. A continuación, se esbozan los puntos clave de este documento:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4
          p.mb-0 #[b Objeto:] en este documento se detallan los principios, directrices, normas y requisitos mínimos que deben cumplir los operadores que participan en la producción primaria, procesamiento, empacado, etiquetado, almacenamiento, certificación, importación y comercialización de productos obtenidos a través de sistemas de producción agropecuaria ecológica. Además, se aborda la regulación de los organismos de control y se establece el sistema de control para estos productos.

          
    .row.justify-content-center.align-items-center.mb-5
      .col-md-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4
          p #[b Campo de aplicación:] el reglamento se aplicará en todo el territorio nacional a los sistemas de producción y comercialización de productos ecológicos provenientes de: 
          ul.lista-ul.ms-4.mb-0
            li 
              i.lista-ul__vineta
              | Productos agrícolas vegetales no transformados, productos pecuarios no transformados y los provenientes de aprovechamiento pesquero y acuícola.
            li 
              i.lista-ul__vineta
              | Productos procesados destinados a la alimentación humana derivados de los productos indicados en el literal anterior.
            li.mb-0
              i.lista-ul__vineta
              span.mb-0 Productos alimenticios importados, de conformidad con lo establecido en la Resolución que adopta el reglamento.

    p.mb-4(data-aos="fade-down") Este documento tiene como objetivo principal proporcionar un marco legal y técnico que respalde y regule la producción y comercialización de alimentos ecológicos en Colombia, garantizando su calidad, sostenibilidad y conformidad con las normas nacionales e internacionales.
    p.mb-5(data-aos="fade-down") Dentro de este se estipulan los diferentes requisitos para cada una de las etapas dentro del proceso productivo que se describen a continuación: 

    .tarjeta.tarjeta--azul.mb-5(data-aos="fade-down")
      .p-4 
        h4 Procesamiento de alimentos
        p.mb-4 Para el adecuado procesamiento de alimentos tanto de origen tradicional como de origen orgánico, es necesario contar con los debidos requerimientos de la normatividad vigente para asegurar la calidad e inocuidad del producto final y tener en cuenta la satisfacción del cliente. 

        h4 Requisitos generales
        p Los requisitos generales que se presentan dentro del reglamento para la producción primaria del procesamiento de alimentos provenientes de prácticas agropecuarias ecológicas, se muestran a continuación: 

    PasosA.color-primario.mb-5(tipo="l" data-aos="fade-down-right")
      .row.justify-content-center.align-items-center
        .col-md-8.mb-4.mb-md-0
          h3 Procesamiento paralelo
          p Se permite la elaboración o procesamiento paralelo únicamente cuando el operador sea capaz de demostrar documentalmente al organismo de control, mediante un registro la separación de las actividades convencionales y ecológicas.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema5/tema5-13.svg', alt='')
      .row.justify-content-center.align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/tema5-14.svg', alt='')
        .col-md-8
          h3 Normatividad
          p Los productos e instalaciones deberán cumplir con lo estipulado en el Decreto 3075 de 1997 del Ministerio de Salud o el que lo remplace, el cual regula las actividades de fabricación, procesamiento, preparación, envase, almacenamiento, transporte, distribución y comercialización de alimentos en el territorio nacional.
      .row.justify-content-center.align-items-center
        .col-md-8.mb-4.mb-md-0
          h3 Reglamento
          p Los productos de origen vegetal deberán cumplir con lo reglamentado en la Resolución 14712 de 1984 del Ministerio de Salud o la que la reemplace, la cual reglamenta lo relacionado con producción, procesamiento, transporte, almacenamiento y comercialización de vegetales como frutas y hortalizas elaboradas.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema5/tema5-15.svg', alt='')
      .row.justify-content-center.align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/tema5-16.svg', alt='')
        .col-md-8
          h3 Alimento ecológico
          p En un alimento declarado como ecológico no se permite la mezcla de un mismo ingrediente ecológico con uno que no lo sea.
      .row.justify-content-center.align-items-center
        .col-md-8.mb-4.mb-md-0
          h3 Ingredientes
          ul.lista-ul.ms-4.mb-0
            li 
              i.lista-ul__vineta
              |  El alimento o sus ingredientes no deben incluir productos químicos de síntesis, ni plaguicidas, sulfitos, nitratos o nitritos.
            li 
              i.lista-ul__vineta
              | El alimento no contendrá colorantes, conservantes o saborizantes sintéticos.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema5/tema5-17.svg', alt='')
      .row.justify-content-center.align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/tema5-18.svg', alt='')
        .col-md-8
          h3 Transformación de alimentos
          p El manejo y transformación de alimentos orgánicos debe mantener la inocuidad, calidad e integridad del producto y debe ser realizado en forma separada en tiempo y/o espacio de la transformación de productos no orgánicos.
      .row.justify-content-center.align-items-center
        .col-md-8.mb-4.mb-md-0
          h3 Materia prima ecológica
          p En los productos donde la participación de la materia prima ecológica no alcance los límites establecidos para obtener la denominación de ecológico, solo se podrá incorporar dicha denominación a continuación de cada ingrediente, cuando corresponda en el listado de los mismos.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema5/tema5-19.svg', alt='')

    p.mb-4(data-aos="fade-down") A continuación, se mencionan otros requisitos que se deben tener presentes al momento de realizar la producción primaria de cualquier tipo de alimentos ecológicos.

    p.mb-4(data-aos="fade-down") #[b Producción paralela:] se permite la producción paralela únicamente cuando el operador garantice mediante registros la separación de las actividades convencionales de las ecológicas y que, a su vez, demuestre un adecuado proceso de limpieza y desinfección entre dichas actividades.

    p.mb-4(data-aos="fade-down") #[b Requisitos mínimos de control:] al iniciarse el proceso de certificación, el organismo de control deberá recabar los antecedentes de cada una de las unidades procesadoras mediante una inspección o informe inicial, firmado por el inspector actuante y el responsable de la elaboración o procesamiento, este deberá contemplar como mínimo los siguientes elementos:

    ul.lista-ul.ms-4.mb-5(data-aos="fade-down-left")
      li 
        i.fas.fa-circle
        | Nombre del establecimiento y datos personales del responsable.
      li 
        i.fas.fa-circle
        | Ubicación, plano de la planta y de sus instalaciones.
      li 
        i.fas.fa-circle
        | Productos o líneas a certificar, diagrama del proceso de elaboración con variables y materias primas utilizadas, descripción del proceso.
      li 
        i.fas.fa-circle
        | Lista de ingredientes utilizados en el proceso y su origen, así como toda otra sustancia que intervenga en el proceso de elaboración.
      li 
        i.fas.fa-circle
        | Programa de limpieza y control sanitario de equipos, máquinas, elementos de transporte y depósitos a fin de evitar contaminaciones.
      li 
        i.fas.fa-circle
        | Análisis y controles de calidad.
      li 
        i.fas.fa-circle
        | Información documentada mediante la cual se garantice que el productor puede realizar acciones de trazabilidad.
      li 
        i.fas.fa-circle
        | La planta debe contar con concepto sanitario expedido por la autoridad competente.
        
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Etiquetado

    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/tema5-20.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-md-5
        p.mb-0 Los productos amparados bajo este reglamento, deberán cumplir con lo especificado en la Resolución 5109 de 2005 del Ministerio de Protección Social, que establece el reglamento técnico sobre los requisitos de rotulación o etiquetado que deben cumplir los diferentes alimentos envasados y materias primas de alimentos para consumo humano y adicionalmente llevar impreso, en lugar visible, mínimo las siguientes leyendas:

    ul.lista-ul.ms-4.mb-5(data-aos="fade-down-left")
      li 
        i.fas.fa-circle
        | La mención “Producto Agropecuario Ecológico”.
      li 
        i.fas.fa-circle
        | El logotipo del Sello de “Alimento Ecológico”, reglamentado por el Ministerio de Agricultura y Desarrollo Rural.
      li 
        i.fas.fa-circle
        | La identificación del organismo de control autorizado por el Ministerio de Agricultura y el número de la Resolución que lo autoriza como tal.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Etiquetado de productos en conversión hacia la producción ecológica

    .row.justify-content-center.align-items-center.mb-5
      .col-md-6(data-aos="fade-down-right")
        p Los productos que estén en proceso de conversión de producción convencional a producción ecológica,  deberán utilizar etiquetas donde se haga énfasis y referencia a que estos productos se encuentran en periodo de conversión, siempre y cuando se cumpla con las condiciones que se estipulan a continuación: 
        ul.lista-ul.mb-0.ms-4
          li 
            i.fas.fa-circle
            | Cumplir con lo estipulado en lo que se refiere al periodo de conversión.
          li 
            i.fas.fa-circle
            | No inducir en error al comprador del producto, acerca de la diferencia de la naturaleza entre este producto y los que cumplen con todos los requisitos para ser considerados como “productos ecológicos”.
          li 
            i.fas.fa-circle
            | En la etiqueta de estos productos aparecerá la indicación “Producido en conversión hacia la agricultura ecológica” en un tamaño, color de letra y fondo que sean visibles en un campo de visión normal por una persona con visión normal.
      .col-md-6(data-aos="fade-down-left")
        figure
          img(src='@/assets/curso/temas/tema5/tema5-21.png', alt='')

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Empaque y envase

    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/tema5-22.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-md-5
        p Los diferentes productos que sean producidos bajo los estándares reglamentados sobre sellos ecológicos, deberán ser empacados y envasados teniendo en cuenta los parámetros establecidos por la normatividad vigente, para que sean fácilmente referenciados y cuenten con todas las garantías para que el consumidor adquiera el producto en las mejores condiciones. 
          br
          br
          | El empaque y envase para los productos agropecuarios ecológicos, tanto primarios como elaborados, aparte de cumplir con la normativa vigente en la materia, tendrán en cuenta las siguientes especificaciones o condiciones generales:

    ul.lista-ul.ms-4.mb-5(data-aos="fade-down-left")
      li 
        i.fas.fa-check
        | Los empaques o envases de los productos agropecuarios ecológicos, tanto primarios como elaborados, deberán estar preferiblemente fabricados en materiales biodegradables, reciclables y con materiales que no contaminen el medio ambiente.
      li 
        i.fas.fa-check
        | Si son distribuidos al detal en supermercados convencionales, deberán estar debidamente empacados o envasados desde el predio de producción o elaboración.
      li 
        i.fas.fa-check
        | Si son destinados para la venta al por mayor, deberán estar debidamente empacados o envasados desde el predio de producción o elaboración, ubicados aparte de los no agropecuarios ecológicos.
      li 
        i.fas.fa-check
        | Pueden ser empacados bajo las siguientes condiciones: atmósfera controlada, atmósfera modificada, enfriamiento, congelamiento, secado y regulación de humedad.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Almacenamiento y transporte
    
    p.mb-4(data-aos="fade-down") Para el almacenamiento y el transporte de productos, se deben tener en cuenta algunas consideraciones claves que se pueden conocer en el siguiente listado:
    
    ul.lista-ul.ms-4.mb-5(data-aos="fade-down-left")
      li 
        i.fas.fa-check
        | Se deberá evitar que los productos ecológicos y los convencionales se mezclen al momento de ser almacenados y transportados.
      li 
        i.fas.fa-check
        | Es necesario que se tomen las medidas necesarias que garanticen cualquier tipo de contaminación y así preservar los alimentos.
      li 
        i.fas.fa-check
        | En los lugares de almacenamiento se debe evitar tratamientos con plaguicidas.
      li 
        i.fas.fa-check
        | El almacenamiento deberá estar libre de plagas o insectos y ser apropiado para alimentos ecológicos certificados.
      li 
        i.fas.fa-check
        | Los lugares de almacenamiento deberán ser limpiados y desinfectados de acuerdo a la normatividad vigente.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Control de plagas en almacén

    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/tema5-23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Para el manejo de las plagas en los lugares de almacenamiento se deben tener en cuenta las siguientes medidas:
          br
          br
        ul.lista-ul.ms-2(data-aos="fade-down-left" style="display:inline-grid")
          li 
            i.fas.fa-check
            | El sistema para combatir las plagas deberá basarse en métodos preventivos, como lo son la perturbación y la eliminación de los hábitats donde se generan las plagas y bloquear el acceso a las instalaciones.
          li 
            i.fas.fa-check
            | Las plagas en los cultivos se deberán evitar, empleando un manejo integrado donde se implementan barreras físicas y demás tratamientos como lo son: luz ultravioleta, trampas, ultrasonidos, entre otros.
          li.mb-0 
            i.fas.fa-check
            | Los materiales que se utilicen para empacar productos alimenticios orgánicos deben estar libres de fungicidas, conservadores, fumigantes, insecticidas y cualquier otro contaminante.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Comercialización

    .row.justify-content-center.align-items-center.mb-5
      .col-md-4.col-8(data-aos="fade-down-right")
        figure
          img(src='@/assets/curso/temas/tema5/tema5-24.png', alt='')
      .col-md-8(data-aos="fade-down-left")
        p Todos aquellos productos agropecuarios que se comercialicen utilizando la denominación de “Producto Agropecuario Ecológico” deberán estar previamente certificado por un ente certificador autorizado por el Ministerio de Agricultura y Desarrollo Rural.
        p Las empresas que se dediquen a la comercialización de productos agropecuarios ecológicos donde se adelanten los procesos de lavado, clasificación, empaque, embalaje y almacenamiento, deberán realizar estas actividades por separado de los productos obtenidos en un sistema de producción agrícola convencional. 
        p Además, se deberá disponer de un sitio exclusivo para ubicar los productos ecológicos dentro del lugar de venta y se permitirá el acceso del personal autorizado por el ministerio para que se lleven a cabo las supervisiones necesarias.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Importación

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-12(data-aos="fade-down-right")
        p En el proceso de importación de productos agropecuarios ecológicos en Colombia, se deben tener en cuenta varios parámetros y requisitos específicos:
        ul.lista-ul.mb-4.ms-4
          li 
            i.fas.fa-check
            | Los productos destinados a la importación deben cumplir con la legislación vigente en materia de comercio exterior.
          li 
            i.fas.fa-check
            | El Instituto Colombiano Agropecuario (ICA) debe otorgar una autorización para la importación de estos productos.
          li 
            i.fas.fa-check
            | Los organismos de control del país exportador deben emitir un certificado que indique que se ha llevado a cabo una inspección a lo largo de la cadena de producción del alimento que se pretende importar.
        p(data-aos="fade-down") Estos requisitos aseguran que los productos agropecuarios ecológicos que ingresan al país cumplan con los estándares de calidad y sostenibilidad requeridos, además de garantizar la trazabilidad y la conformidad con las regulaciones nacionales e internacionales.
      .col-md-4.col-8(data-aos="fade-down-left")
        figure
          img(src='@/assets/curso/temas/tema5/tema5-25.png', alt='')
    
    p.mb-4(data-aos="fade-down") Para importar productos agropecuarios ecológicos en Colombia, es esencial cumplir con los siguientes estándares y requisitos:
    
    ul.lista-ul.ms-4.mb-4(data-aos="fade-down-left")
      li 
        i.fas.fa-check
        | Los productos ecológicos importados deben estar en envases que tengan un cierre que evite la sustitución del contenido, y deben estar debidamente identificados, lo que permite la trazabilidad de ese lote en particular.
      li 
        i.fas.fa-check
        | El importador debe estar dispuesto a proporcionar al Ministerio de Agricultura y Desarrollo Rural toda la información necesaria para fines de control y supervisión, así como permitir las inspecciones correspondientes en sus instalaciones.
      li 
        i.fas.fa-check
        | Los productos ecológicos importados deben almacenarse por separado de los productos convencionales, lo que garantiza que se mantenga la integridad y la pureza de los productos ecológicos durante su almacenamiento.

    p.mb-4(data-aos="fade-down") Estos requisitos aseguran que los productos agropecuarios ecológicos importados cumplan con los estándares de calidad y sostenibilidad necesarios y que se evite cualquier contaminación cruzada con productos convencionales.

    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Procedimientos sistema de control de productos agropecuarios ecológicos

    figure.mb-5(data-aos="fade-down")
      img(src='@/assets/curso/temas/tema5/tema5-26.png', alt='')

    p.mb-4(data-aos="fade-down") Para que un conjunto de productores sea considerado como un grupo apto para recibir certificación ecológica, es necesario que cumpla con los siguientes requisitos:
    
    ul.lista-ul.ms-4.mb-4(data-aos="fade-down-left")
      li 
        i.fas.fa-check
        | Contar con una administración central: deben tener una entidad o entidad responsable de garantizar el cumplimiento del reglamento interno y coordinar las actividades del grupo.
      li 
        i.fas.fa-check
        | Establecer un Sistema de Control Interno (SCI): deben implementar un sistema de control interno que permita supervisar y verificar que las prácticas de producción cumplan con los estándares ecológicos establecidos.
      li 
        i.fas.fa-check
        | Definir y establecer un reglamento interno: deben elaborar un conjunto de reglas y normas internas que regulen las prácticas de producción, el manejo de insumos, la trazabilidad, entre otros aspectos relacionados con la producción ecológica.
      li 
        i.fas.fa-check
        | Mantener una relación directa entre la administración y los productores: los responsables de la administración y del sistema de control interno deben mantener una comunicación efectiva y una relación cercana con los demás integrantes del grupo para asegurar el cumplimiento de los requisitos ecológicos.

    p.mb-4(data-aos="fade-down") Estos requisitos garantizan que los grupos de productores cumplan con los estándares de producción ecológica y que haya una supervisión adecuada para mantener la calidad e integridad de los productos ecológicos certificados. 

    p.mb-4(data-aos="fade-down") La administración central debe, entonces, cumplir con una serie de responsabilidades para con el grupo de productores, las cuales se enumeran en la siguiente lista.

    ul.lista-ul.ms-4.mb-4(data-aos="fade-down-left")
      li 
        i.fas.fa-check
        | Instalar un Sistema de Control Interno (SCI).
      li 
        i.fas.fa-check
        | Velar por la implementación de dicho sistema.
      li 
        i.fas.fa-check
        | Velar por que la calidad del producto se mantenga.
      li 
        i.fas.fa-check
        | Capacitar a sus miembros para el cumplimiento del reglamento.
      li 
        i.fas.fa-check
        | Designar y capacitar inspectores internos.

    p.mb-4(data-aos="fade-down") Además, es de vital importancia mencionar que existen unos deberes del sistema de control interno (SCI) que deben ser conocidos por todo el sistema para que las auditorías cumplan su función final, los cuales se mencionan a continuación:

    ul.lista-ul.ms-4.mb-4(data-aos="fade-down-left")
      li 
        i.fas.fa-check
        | Mantener centralizada, completa y actualizada la información de cada uno de sus miembros.
      li 
        i.fas.fa-check
        | Contar con un registro de inclusiones y exclusiones debidamente documentadas.
      li 
        i.fas.fa-check
        | Realizar la inspección del 100 % de los miembros del grupo por lo menos una vez al año.

    p.mb-4(data-aos="fade-down") Todos los organismos de control, inspectores de sistemas de producción agropecuaria y productores ecológicos certificados deberán registrarse ante el Ministerio de Agricultura y Desarrollo Rural, pues esta es la entidad que coordina el Sistema Nacional de Control de la Producción Agropecuaria Ecológica.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4
          p #[b Para recordar]
          p.mb-0 Todas aquellas solicitudes de registro que se presenten deben estar acompañadas de una copia y, una vez cumplidos todos los requisitos, se procederá a anotar la inscripción en el correspondiente registro que tendrá vigencia de un año, cuando este tiempo haya transcurrido deberá ser renovado.

    p.mb-4(data-aos="fade-down") Para el adecuado registro de las industrias que elaboren alimentos ecológicos es necesario presentar los siguientes requisitos ante el Ministerio de Agricultura y Desarrollo Rural:

    ul.lista-ul.ms-4.mb-4(data-aos="fade-down-left")
      li 
        i.fas.fa-check
        | Solicitud indicando la dirección exacta de la empresa donde se lleva a cabo las actividades y el formulario de registro debidamente diligenciado.
      li 
        i.fas.fa-check
        | Adjuntar a la solicitud la debida certificación ecológica emitida por un organismo de control debidamente registrado.

    p.mb-5(data-aos="fade-down") Los requisitos para registrar personas naturales o jurídicas con certificaciones de producción ecológica serán los mismos que fueron mencionados en el párrafo anterior. 

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
