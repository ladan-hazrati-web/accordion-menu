let _ul = document.querySelectorAll('.acc')
let _pro = document.querySelectorAll('.acc>li')
let _li = document.querySelectorAll('.list>li')
let marketing = document.getElementById('marketing')
let marketing1 = document.getElementById('marketing1')
let creative = document.getElementById('creative')
let creative1 = document.getElementById('creative1')
let branding = document.getElementById('branding')
let branding1 = document.getElementById('branding1')
let service = document.getElementById('service')
_ul.forEach((val) => {
    let h = val.clientHeight
    val.setAttribute('data-height', h)
    val.style.height = 0
})
// *********************

_li.forEach((val, index) => {
    val.addEventListener('click', function () {
        for (let i = 0; i < _li.length; i++) {
            if (index != i) {
                _ul[i].style.height = 0
            }
        }
    })
})
// *****************
_li.forEach((val) => {
    val.addEventListener('click', function () {
        service.classList.add('hidden')
        let child = this.children
        let x = child[0].innerText
        console.log(x);
        let _h = child[1].getAttribute('data-height')
        child[1].style.height = `${_h}px`
        switch (x) {
            case "MARKETING":
                branding1.classList.remove('bg-color9')
                branding1.classList.add('-top-[100%]')
                branding1.classList.remove('top-0')
                creative1.classList.add('-top-[100%]')
                creative1.classList.remove('top-0')
                creative.classList.remove('bg-color4')
                creative1.classList.remove('bg-color9')
                branding.classList.remove('bg-color8')
                branding.classList.add('-top-[100%]')
                branding.classList.remove('top-0')
                creative.classList.remove('top-0')
                creative.classList.add('-top-[100%]')
                marketing.classList.remove('-top-[100%]');
                marketing.classList.add('top-0');
                this.classList.remove('bg-color14')
                this.classList.add('bg-color6');
                this.nextElementSibling.classList.remove('bg-color10')
                this.nextElementSibling.classList.remove('bg-color14')
                this.nextElementSibling.classList.add('bg-color7')
                this.nextElementSibling.nextElementSibling.classList.remove('bg-color9')
                this.nextElementSibling.nextElementSibling.classList.add('bg-color7')
                setTimeout(() => {
                    marketing.classList.add('bg-color3')
                }, 500);
                marketing1.classList.remove('-top-[100%]')
                marketing1.classList.add('top-0')
                setTimeout(() => {
                    marketing1.classList.add('bg-color3')
                }, 500);
                this.parentElement.classList.remove('bg-color9')
                this.parentElement.classList.remove('bg-color9')
                this.parentElement.classList.add('bg-color10')
                this.parentElement.classList.add('bg-color6')
                this.previousElementSibling.classList.add('bg-color7')
                this.previousElementSibling.classList.remove('bg-color11')
                this.previousElementSibling.classList.remove('bg-color12')
                break;
            case 'CREATIVE':
                branding1.classList.remove('bg-color9')
                branding1.classList.add('-top-[100%]')
                branding1.classList.remove('top-0')
                marketing1.classList.remove('bg-color3')
                marketing1.classList.add('-top-[100%]')
                marketing1.classList.remove('top-0')
                marketing.classList.remove('bg-color3')
                branding.classList.remove('bg-color8')
                marketing.classList.add('-top-[100%]')
                marketing.classList.remove('top-0')
                branding.classList.add('-top-[100%]')
                branding.classList.remove('top-0')
                creative.classList.remove('-top-[100%]')
                creative.classList.add('top-0')
                setTimeout(() => {
                    creative.classList.add('bg-color4')
                }, 500);
                creative1.classList.remove('-top-[100%]')
                creative1.classList.add('top-0')
                setTimeout(() => {
                    creative1.classList.add('bg-color9')
                }, 500);
                this.previousElementSibling.previousElementSibling.classList.remove('bg-color7')
                this.previousElementSibling.previousElementSibling.classList.remove('bg-color12')
                this.previousElementSibling.previousElementSibling.classList.add('bg-color11')
                this.previousElementSibling.classList.remove('bg-color6');
                this.previousElementSibling.classList.add('bg-color13');
                this.classList.remove('bg-color7')
                this.classList.remove('bg-color2')
                this.classList.remove('bg-color14')
                this.classList.add('bg-color10')
                this.previousElementSibling.classList.remove('bg-color2')
                this.previousElementSibling.classList.remove('bg-color14')
                this.nextElementSibling.classList.remove('bg-color2')
                this.nextElementSibling.classList.remove('bg-color7')
                this.nextElementSibling.classList.remove('bg-color9')
                this.nextElementSibling.classList.add('bg-color13')
                this.parentElement.classList.remove('bg-color1')
                this.parentElement.classList.remove('bg-color6')
                this.parentElement.classList.remove('bg-color9')
                this.parentElement.classList.add('bg-color10')
                break;
            case 'BRANDING':
                marketing1.classList.add('-top-[100%]')
                marketing1.classList.remove('top-0')
                creative1.classList.remove('bg-color9')
                branding1.classList.add('-top-[100%]')
                branding1.classList.remove('top-0')
                creative1.classList.add('-top-[100%]')
                creative1.classList.remove('top-0')
                creative.classList.remove('bg-color4')
                marketing.classList.remove('bg-color3')
                creative.classList.remove('top-0')
                creative.classList.add('-top-[100%]')
                marketing.classList.remove('top-0')
                marketing.classList.add('-top-[100%]')
                branding.classList.remove('-top-[100%]')
                branding.classList.add('top-0')
                setTimeout(() => {
                    branding.classList.add('bg-color8')
                }, 500);
                branding1.classList.remove('-top-[100%]')
                branding1.classList.add('top-0')
                setTimeout(() => {
                    branding1.classList.add('bg-color9')
                }, 500);
                this.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove('bg-color7')
                this.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove('bg-color11')
                this.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('bg-color12')
                this.parentElement.classList.remove('bg-color1')
                this.parentElement.classList.remove('bg-color6')
                this.parentElement.classList.remove('bg-color10')
                this.parentElement.classList.add('bg-color9')
                this.previousElementSibling.classList.add('bg-color14')
                this.previousElementSibling.previousElementSibling.classList.add('bg-color14')
                this.previousElementSibling.classList.remove('bg-color7')
                this.previousElementSibling.classList.remove('bg-color2')
                this.previousElementSibling.previousElementSibling.classList.remove('bg-color2')
                this.previousElementSibling.previousElementSibling.classList.remove('bg-color6')
                this.previousElementSibling.previousElementSibling.classList.remove('bg-color13')
                this.classList.remove('bg-color2')
                this.classList.add('bg-color9')
                break;


        }
    })
})
// *****************
_pro.forEach((val) => {
    val.addEventListener('click', () => {
        event.stopImmediatePropagation()
    })
})

// *******************
