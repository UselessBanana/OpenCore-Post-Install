(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{362:function(e,t,a){e.exports=a.p+"assets/img/nvram.c97ef040.png"},486:function(e,t,a){"use strict";a.r(t);var o=a(25),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"nvram-emulada"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nvram-emulada"}},[e._v("#")]),e._v(" NVRAM Emulada")]),e._v(" "),o("p",[e._v("Esta sección es para los que no tienen NVRAM nativo. El hardware más común que tiene NVRAM incompatible con macOS son X99 y ciertos chipsets de la serie X299:")]),e._v(" "),o("ul",[o("li",[e._v("X99")]),e._v(" "),o("li",[e._v("X299")])]),e._v(" "),o("p",[e._v("Para B360, B365, H310, H370, Z390, usen "),o("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-PMC"),o("OutboundLink")],1),e._v(" y ponerlo en EFI/OC/ACPI y config.plist -> ACPI -> Add. Para más información about crear y compilar los SSDTs, dirígete a "),o("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[e._v("Getting started with ACPI")]),o("OutboundLink")],1)]),e._v(" "),o("p",[o("strong",[e._v("Note")]),e._v(": CPUs de la 10a generación no necesitan esta SSDT")]),e._v(" "),o("h2",{attrs:{id:"cleaning-out-the-clover-gunk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cleaning-out-the-clover-gunk"}},[e._v("#")]),e._v(" Cleaning out the Clover gunk")]),e._v(" "),o("p",[e._v("So some may not have noticed but Clover may have installed RC scripts into macOS for proper NVRAM emulation. Esto es un problema ya que it conflicts con la emulación de OpenCore.")]),e._v(" "),o("p",[e._v("Files to delete:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("/Volumes/EFI/EFI/CLOVER/drivers64UEFI/EmuVariableUefi-64.efi")])]),e._v(" "),o("li",[o("code",[e._v("/Volumes/EFI/nvram.plist")])]),e._v(" "),o("li",[o("code",[e._v("/etc/rc.clover.lib")])]),e._v(" "),o("li",[o("code",[e._v("/etc/rc.boot.d/10.save_and_rotate_boot_log.local")])]),e._v(" "),o("li",[o("code",[e._v("/etc/rc.boot.d/20.mount_ESP.local")])]),e._v(" "),o("li",[o("code",[e._v("/etc/rc.boot.d/70.disable_sleep_proxy_client.local.disabled")])]),e._v(" "),o("li",[o("code",[e._v("/etc/rc.shutdown.d/80.save_nvram_plist.local​")])])]),e._v(" "),o("p",[e._v("If folders are empty then delete them as well:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("/etc/rc.boot.d")])]),e._v(" "),o("li",[o("code",[e._v("/etc/rc.shutdown.d​")])])]),e._v(" "),o("h2",{attrs:{id:"verifying-if-you-have-working-nvram"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#verifying-if-you-have-working-nvram"}},[e._v("#")]),e._v(" Verifying if you have working NVRAM")]),e._v(" "),o("p",[e._v("Para empezar, abre la terminal y corre the following one line at a time:")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" -s\n"),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" nvram -c\n"),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" nvram "),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("myvar")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("test\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exit")]),e._v("\n")])])]),o("p",[e._v("Ahora reinicía y corre esto:")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[e._v("nvram -p "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" -i myvar\n")])])]),o("p",[e._v("If nothing returns then your NVRAM is not working. If a line containing "),o("code",[e._v("myvar test")]),e._v(" returns, la NVRAM funciona.")]),e._v(" "),o("p",[e._v("Note: "),o("code",[e._v("nvram -c")]),e._v(" requires SIP to be off, an alternative is to wipe NVRAM at the boot menu. Reminder you'll need "),o("code",[e._v("Misc -> Security -> AllowNvramReset -> YES")])]),e._v(" "),o("h2",{attrs:{id:"activar-la-nvram-emulada-con-nvram-plist"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#activar-la-nvram-emulada-con-nvram-plist"}},[e._v("#")]),e._v(" Activar la NVRAM emulada (con nvram.plist)")]),e._v(" "),o("p",[e._v("Para activar la NVRAM emulada, necesitas puestan estas 3 cosas:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(362),alt:""}})]),e._v(" "),o("p",[e._v("Dentro de la config.plist:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Booter")]),e._v(":\n"),o("ul",[o("li",[o("code",[e._v("DisableVariableWrite")]),e._v(": set to "),o("code",[e._v("NO")])])])]),e._v(" "),o("li",[o("strong",[e._v("Misc -> Security")]),e._v(":\n"),o("ul",[o("li",[o("code",[e._v("ExposeSensitiveData")]),e._v(": set to "),o("code",[e._v("0x3")])])])]),e._v(" "),o("li",[o("strong",[e._v("NVRAM")]),e._v(":\n"),o("ul",[o("li",[o("code",[e._v("LegacyEnable")]),e._v(": set to "),o("code",[e._v("YES")])]),e._v(" "),o("li",[o("code",[e._v("LegacyOverwrite")]),e._v(" set to "),o("code",[e._v("YES")])]),e._v(" "),o("li",[o("code",[e._v("LegacySchema")]),e._v(": NVRAM variables set(OpenCore compares these to the variables present in nvram.plist)")]),e._v(" "),o("li",[o("code",[e._v("WriteFlash")]),e._v(": set to "),o("code",[e._v("YES")])])])])]),e._v(" "),o("p",[e._v("Dentro tu EFI:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("OpenRuntime.efi")]),e._v(" driver(this is needed for proper sleep, shutdown and other services to work correctly")])]),e._v(" "),o("p",[e._v("Now grab the "),o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("'LogoutHook.command'"),o("OutboundLink")],1),e._v("(Inside "),o("code",[e._v("/Utilities/LogoutHook/")]),e._v(") and place it somewhere safe (e.g. within your user directory, as shown below):")]),e._v(" "),o("p",[o("code",[e._v("/Users/(your username)/LogoutHook/LogoutHook.command")])]),e._v(" "),o("p",[e._v("Abre la terminal y corre lo siguiente:")]),e._v(" "),o("p",[o("code",[e._v("sudo defaults write com.apple.loginwindow LogoutHook /Users/(your username)/LogoutHook/LogoutHook.command")])]),e._v(" "),o("p",[e._v("And voila! Tienes NVRAM emulada!")]),e._v(" "),o("p",[e._v("Do keep in mind this requires the "),o("code",[e._v("nvram")]),e._v(" command to support the "),o("code",[e._v("-x")]),e._v(" flag for this to work correctly which is unavailable on macOS 10.12 and below. If you are installing macOS 10.12 or earlier, you need to copy "),o("code",[e._v("nvram.mojave")]),e._v(" into the same folder as "),o("code",[e._v("LogoutHook.command")]),e._v(", which fixes this by invoking it instead of the system "),o("code",[e._v("nvram")]),e._v(" command.")]),e._v(" "),o("p",[e._v("Something else to note is that macOS is only able to read nvram.plist but it won't be able to write to nvram.plist unless running the shutdown process. This means running the test above won't work")])])}),[],!1,null,null,null);t.default=r.exports}}]);