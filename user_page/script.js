document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu_home").addEventListener("click", function() {
        displayHomeContent();
    });
    
    document.getElementById("menu_payment").addEventListener("click", function() {
        displayPaymentContent();
    });

});

function displayHomeContent() {
    document.querySelector(".content").innerHTML = `
            <div class="table">
            <table>
                <tbody>
                    <tr>
                        <td colspan="2" class="profile-title">
                            <h2>Профиль</h2>
                        </td>
                    </tr>
                    <tr>
                        <td class="row">
                            Адресс
                        </td>
                        <td>
                            Кривой Рог Синеводская 9/2
                        </td>
                    </tr>
                    <tr>
                        <td class="row">
                            ФИО
                        </td>
                        <td>
                            Терета Денис Андреевич
                        </td>
                    </tr>
                    <tr>
                        <td class="row">
                            Логин
                        </td>
                        <td>
                            tereta992
                        </td>
                    </tr>
                    <tr>
                        <td class="row">
                            Пароль
                        </td>
                        <td>
                            123456789
                        </td>
                    </tr>
                    <tr>
                        <td class="row">
                            IP Адресс
                        </td>
                        <td>
                            127.0.0.1
                        </td>
                    </tr>
                    <tr>
                        <td class="row">
                            Тариф
                        </td>
                        <td>
                            Скоростной
                        </td>
                    </tr>
                    <tr>
                        <td class="row">
                            Состояние
                        </td>
                        <td>
                            Оплачен
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

function displayPaymentContent() {
    document.querySelector(".content").innerHTML = `
        <div class="payment_methods">
            <h2>Онлайн оплата</h2>
            <hr>
            <div class="photos">
                <a href="#">
                    <img src="img/liqpay.png" alt="Payment Method 1">
                </a>
                <a href="#">
                    <img src="img/privat.png" alt="Payment Method 2">
                </a>
                <a href="#">
                    <img src="img/portmone.png" alt="Payment Method 3">
                </a>
            </div>
        </div>

    `;
}
