const toggleButtons = document.querySelectorAll('.toggle-btn');
const priceAmounts = document.querySelectorAll('.amount');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const isYearly = button.textContent.includes('YEARLY');

        priceAmounts.forEach(price => {
            const monthlyPrice = parseFloat(price.getAttribute('data-monthly'));

            if (isYearly) {
                //(Monthly Price * 12) - 15% Discount
                const yearlyTotal = monthlyPrice * 12;
                const discountedPrice = yearlyTotal * 0.85;

                price.textContent = Math.round(discountedPrice);
                price.nextElementSibling.textContent = '/Year';
            } else{
                price.textContent = monthlyPrice;
                price.nextElementSibling.textContent = '/Month';
            }
        });
    });
});