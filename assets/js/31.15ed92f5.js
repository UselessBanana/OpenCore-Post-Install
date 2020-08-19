(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{481:function(e,t,a){"use strict";a.r(t);var r=a(25),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"opencore-post-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opencore-post-install"}},[e._v("#")]),e._v(" OpenCore Post-Install")]),e._v(" "),a("p",[e._v("Bienvenido a la OpenCore Post-Install guide! Please note that if you have not installed macOS yet, te recomendamos que sigas nuestra guía de instalación:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://inyextciones.github.io/OpenCore-Install-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCore Install Guide"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("And while the info here can be applied to both OpenCore and Clover, principalmente nos fijamos en las instalaciones de OpenCore. So you will need to research a bit more if you run into any issues.")]),e._v(" "),a("h2",{attrs:{id:"como-seguir-esta-guia"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#como-seguir-esta-guia"}},[e._v("#")]),e._v(" Cómo seguir esta guía")]),e._v(" "),a("p",[e._v("Para empezar, not every section in this guide must be complete. It's up to each user whether they feel they want to add the finishing touches or resolve certain issues")]),e._v(" "),a("p",[e._v("Esta guía es dividida entre 6 partes:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#universal"}},[e._v("Universal")]),e._v(" "),a("ul",[a("li",[e._v("All users are recommended to follow")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#arreglos-para-usb"}},[e._v("Arreglos para USB")]),e._v(" "),a("ul",[a("li",[e._v("All users are recommended to follow as well")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#laptop-specifics"}},[e._v("Laptop Specifics")]),e._v(" "),a("ul",[a("li",[e._v("Laptop users are recommended to follow in addition to the above")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#cosm%C3%A9ticos"}},[e._v("Cosméticos")]),e._v(" "),a("ul",[a("li",[e._v("Cosmetics like OpenCore GUI and removing verbose screen output durante el arranque")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#multiboot"}},[e._v("Multiboot")]),e._v(" "),a("ul",[a("li",[e._v("Recomendaciones para users que hacen multiboot")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#miscel%C3%A1neo"}},[e._v("Misceláneo")]),e._v(" "),a("ul",[a("li",[e._v("Otros arreglos misceláneos, not all users will require these fixes")])])])]),e._v(" "),a("h3",{attrs:{id:"universal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#universal"}},[e._v("#")]),e._v(" Universal")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/universal/security.html"}},[e._v("Seguridad y FileVault")]),e._v(" "),a("ul",[a("li",[e._v("Para los a quienes le importen la seguridad y privacidad.")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/universal/audio.html"}},[e._v("Arreglar Audio")]),e._v(" "),a("ul",[a("li",[e._v("Para los que necesiten ayuda en resolver problemas del audio.")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/universal/oc2hdd.html"}},[e._v("Arrancar sin USB")]),e._v(" "),a("ul",[a("li",[e._v("Te deja arrancar OpenCore sin la USB conectada.")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/universal/update.html"}},[e._v("Actualizar OpenCore, kexts y macOS")]),e._v(" "),a("ul",[a("li",[e._v("Comó atualizar tus kexts, OpenCore y macOS seguramente.")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/universal/drm.html"}},[e._v("Arreglar DRM")]),e._v(" "),a("ul",[a("li",[e._v("Para los con problemas de DRM como la reproducción de Netflix.")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/universal/iservices.html"}},[e._v("Arreglar iServices")]),e._v(" "),a("ul",[a("li",[e._v("Información para arreglar los iServices issues como iMessage.")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/universal/pm.html"}},[e._v("Fixing Power Management")]),e._v(" "),a("ul",[a("li",[e._v("Fixes and helps improve both hardware idle and boosting states.")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/universal/sleep.html"}},[e._v("Arreglar Suspensión")]),e._v(" "),a("ul",[a("li",[e._v("Varias cosas que revisar cuando arreglas la suspensión.")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/usb/"}},[e._v("Arreglar USB")]),e._v(" "),a("ul",[a("li",[e._v("Arreglos para problemas de USB como puertos desaparecidos y helping with sleep.")])])],1)]),e._v(" "),a("h3",{attrs:{id:"arreglos-para-usb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arreglos-para-usb"}},[e._v("#")]),e._v(" Arreglos para USB")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/usb/"}},[e._v("USB Mapping: Introducción")]),e._v(" "),a("ul",[a("li",[e._v("Starting point for correcting tu USB")])])],1)]),e._v(" "),a("h3",{attrs:{id:"laptop-specifics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#laptop-specifics"}},[e._v("#")]),e._v(" Laptop Specifics")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/laptop-specific/battery.html"}},[e._v("Arreglar los Read-outs de la Batería")]),e._v(" "),a("ul",[a("li",[e._v("Si tu batería no es compatible out of the box con SMCBatteryManager.")])])],1)]),e._v(" "),a("h3",{attrs:{id:"cosmeticos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cosmeticos"}},[e._v("#")]),e._v(" Cosméticos")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/cosmetic/gui.html"}},[e._v("Add GUI and Boot-chime")]),e._v(" "),a("ul",[a("li",[e._v("Add a fancy GUI to OpenCore and even a boot chime!")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/cosmetic/verbose.html"}},[e._v("Fixing Resolution y Verbose")]),e._v(" "),a("ul",[a("li",[e._v("Helps arreglar la resolución de OpenCore, and allows you to get that sweet Apple logo while booting!")])])],1)]),e._v(" "),a("h3",{attrs:{id:"multiboot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiboot"}},[e._v("#")]),e._v(" Multiboot")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/multiboot/bootstrap.html"}},[e._v("Configurar Bootstrap.efi")]),e._v(" "),a("ul",[a("li",[e._v("Asegura que Windows no elimine OpenCore from nuestro sistema.")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/multiboot/bootcamp.html"}},[e._v("Instalar BootCamp")]),e._v(" "),a("ul",[a("li",[e._v("Nos deja instalar Bootcamp for easy boot switching.")])])],1)]),e._v(" "),a("h3",{attrs:{id:"miscelaneo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#miscelaneo"}},[e._v("#")]),e._v(" Misceláneo")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/misc/rtc.html"}},[e._v("Arreglar RTC")]),e._v(" "),a("ul",[a("li",[e._v("Ayuda a resolver problemas de RTC/CMOS/safe-mode reboot.")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/misc/msr-lock.html"}},[e._v("Arreglar CFG Lock")]),e._v(" "),a("ul",[a("li",[e._v("Nos deja desactivar algunos parches del kernel para mejor estabilidad")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/misc/nvram.html"}},[e._v("NVRAM Emulada")]),e._v(" "),a("ul",[a("li",[e._v("Para usarios que tienen NVRAM rota, or need to test it.")])])],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);