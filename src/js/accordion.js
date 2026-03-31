document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');
        const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
        const svg = trigger.querySelector('svg');
        const isOpen = parentElement.classList.contains('open');

        const plusIcon = `
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.8236 8.47062C14.8236 8.61103 14.7678 8.74568 14.6685 8.84497C14.5692 8.94425 14.4346 9.00003 14.2941 9.00003H9.00003V14.2941C9.00003 14.4346 8.94425 14.5692 8.84497 14.6685C8.74568 14.7678 8.61103 14.8236 8.47062 14.8236C8.33021 14.8236 8.19555 14.7678 8.09627 14.6685C7.99698 14.5692 7.94121 14.4346 7.94121 14.2941V9.00003H2.64709C2.50668 9.00003 2.37202 8.94425 2.27274 8.84497C2.17345 8.74568 2.11768 8.61103 2.11768 8.47062C2.11768 8.33021 2.17345 8.19555 2.27274 8.09627C2.37202 7.99698 2.50668 7.94121 2.64709 7.94121H7.94121V2.64709C7.94121 2.50668 7.99698 2.37202 8.09627 2.27274C8.19555 2.17345 8.33021 2.11768 8.47062 2.11768C8.61103 2.11768 8.74568 2.17345 8.84497 2.27274C8.94425 2.37202 9.00003 2.50668 9.00003 2.64709V7.94121H14.2941C14.4346 7.94121 14.5692 7.99698 14.6685 8.09627C14.7678 8.19555 14.8236 8.33021 14.8236 8.47062Z" fill="white" />
</svg>`;

        const minusIcon = `
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.8236 8.47082C14.8236 8.61123 14.7678 8.74589 14.6685 8.84517C14.5692 8.94445 14.4346 9.00023 14.2941 9.00023H2.64709C2.50668 9.00023 2.37202 8.94445 2.27274 8.84517C2.17345 8.74589 2.11768 8.61123 2.11768 8.47082C2.11768 8.33041 2.17345 8.19575 2.27274 8.09647C2.37202 7.99718 2.50668 7.94141 2.64709 7.94141H14.2941C14.4346 7.94141 14.5692 7.99718 14.6685 8.09647C14.7678 8.19575 14.8236 8.33041 14.8236 8.47082Z" fill="white" />
</svg>`;

        if (!isOpen) {
            parentElement.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
            svg.outerHTML = minusIcon;
        } else {
            parentElement.classList.remove('open');
            panel.style.maxHeight = '0';
            svg.outerHTML = plusIcon;
        }
    });
});