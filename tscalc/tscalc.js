$('.tscalc-form input').change(function () {
	calc();
});
$('.tscalc-form input').keyup(function () {
	calc();
});

function calc() {
	var age = $('.tscalc-form .inp1').val();
	var height2 = $('.tscalc-form .inp2').val();
	var weight2 = $('.tscalc-form .inp3').val();
	var summs = height2 - weight2;
	age = parseInt(age.replace(/\D+/g, ''));
	height2 = parseInt(height2.replace(/\D+/g, ''));
	weight2 = parseInt(weight2.replace(/\D+/g, ''));
	if (age > 0 && height2 > 0 && weight2 > 0) {
		if (summs >= 115) {
			$('.tscalc-form .line1').attr('style', 'visibility: display;');
			$('.tscalc-form .line2').attr('style', 'visibility: display;');
			$('.tscalc-form .line1').html(
				'<span class="green">Вы в прекрасной форме.</span>',
			);
			$('.tscalc-form .line2').html(
				'Для её поддержания достаточно принимать Product_name один раз в неделю.',
			);
		} else {
			if (summs >= 104 && summs <= 114) {
				$('.tscalc-form .line1').attr('style', 'visibility: display;');
				$('.tscalc-form .line2').attr('style', 'visibility: display;');
				$('.tscalc-form .line1').html('У вас не более 10 кг лишнего веса.');
				$('.tscalc-form .line2').html(
					'Достаточно пройти 2-недельный курс добавки Product_name.',
				);
			} else {
				if (summs >= 90 && summs <= 103) {
					$('.tscalc-form .line1').attr('style', 'visibility: display;');
					$('.tscalc-form .line2').attr('style', 'visibility: display;');
					$('.tscalc-form .line1').html('У вас более 18 кг лишнего веса.');
					$('.tscalc-form .line2').html(
						'Чтобы от него избавиться – рекомендуем пройти полный курс добавки Product_name. Ожидаемая потеря веса в первый месяц – от 8 до 17 кг.',
					);
				} else {
					if (summs <= 89) {
						$('.tscalc-form .line1').attr('style', 'visibility: display;');
						$('.tscalc-form .line2').attr('style', 'visibility: display;');
						$('.tscalc-form .line1').html(
							'У вас крайняя стадия ожирения.',
						);
						$('.tscalc-form .line2').html(
							'Срочно пройдите расширенный курс Product_name (от 10 до 14 недель), а также добавьте физические нагрузки. За это время можно сбросить от 25 кг до 40 кг.',
						);
					}
				}
			}
		}
	}
}
