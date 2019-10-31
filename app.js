$(function(){
	
	//write your code here
	$('.race').on('click', function(e){
		e.preventDefault();
		let countdown = 3;
		
		$('#countDown').addClass('countDown');
		$('.countDown').html(countdown);

		let interval = setInterval(function(){
			countdown--;
			$('.countDown').html(countdown);

			if(countdown == 0){

				$('.countDown').html('');
				clearInterval(interval);
				$('#countDown').removeClass('countDown');
				$('.race').attr('disabled', 'disabled');
				$('.startOver').attr('disabled', 'disabled');
				setTimeout(function(){
					let randomCar1 = Math.floor(Math.random()* ((1800)+1) + 300);
					let randomCar2 = Math.floor(Math.random()* ((1800)+1) + 300);

					$('.car1').animate({
						marginLeft: '80%',
					}, randomCar1, function(){
						if(randomCar1 < randomCar2){
							
							console.log(`car1 ${randomCar1}`)
							console.log(`car2 ${randomCar2}`)
							$('.scoreCar1').append(`<tr>
														<td>
															<h5>Finished in: <span class="car1Color">first</span> place with a time of: <span class="car1Color">${randomCar1}</span> milliseconds!</h5>
														</td>
													</tr>`)
													$('#flag').addClass('flag');
							$('body').on('click', function(){
								$('#flag').removeClass('flag');
								$('.race').removeAttr('disabled');
								$('.startOver').removeAttr('disabled');
							})
						}else{
							$('.scoreCar1').append(`<tr>
														<td>
															<h5>Finished in: <span class="car1Color">second</span> place with a time of: <span class="car1Color">${randomCar1}</span> milliseconds!</h5>
														</td>
													</tr>`)
						}
						localStorage.setItem('Car1', randomCar1)
					});
					$('.car2').animate({
						marginLeft: '80%',
					}, randomCar2, function(){
						if(randomCar1 > randomCar2){
							
							console.log(`car1 ${randomCar1}`)
							console.log(`car2 ${randomCar2}`)
							$('.scoreCar2').append(`<tr>
														<td>
															<h5>Finished in: <span class="car2Color">first</span> place with a time of: <span class="car2Color">${randomCar2}</span> milliseconds!</h5>
														</td>
													</tr>`)
							$('#flag').addClass('flag');
							$('body').on('click', function(){
								$('#flag').removeClass('flag');
								$('.race').removeAttr('disabled');
								$('.startOver').removeAttr('disabled');
							})
						}else{
							$('.scoreCar2').append(`<tr>
														<td>
															<h5>Finished in: <span class="car2Color">second</span> place with a time of: <span class="car2Color">${randomCar2}</span> milliseconds!</h5>
														</td>
													</tr>`)
						}
						localStorage.setItem('Car2', randomCar2)
					});
				});
			}
		},1000);
	})
	//restart the position of cars to start line
	$('.startOver').on('click', function(){
		$('.car1').css({'marginLeft': '0'})
		$('.car2').css({'marginLeft': '0'})

	})
	//on window load to get localStorage of cars
	$(function(){
		let car1Temp = localStorage.getItem('Car1');
		let car2Temp = localStorage.getItem('Car2');
		
		if(car1Temp == null && car2Temp == null){
			console.log(car1Temp)
			$('/previousRezult').hide();
			$('.lastScore').hide();
		}else{
			$('.previousRezult').show();
			if(parseInt(car1Temp) < parseInt(car2Temp)){
				$('.lastScore').append(`<tr>
											<td class="previous">
												<h5> <span class="car1Color">Car1</span> finished in <span class="car1Color">first</span> place, with a time of <span class="car1Color">${car1Temp}</span> milliseconds!</h5>
											</td>
										</tr>
										<tr>
											<td class="previous">
												<h5> <span class="car2Color">Car2</span> finished in <span class="car2Color">second</span> place, with a time of <span class="car2Color">${car2Temp}</span> milliseconds!</h5>
											</td>
										</tr>`)
			}else{
				$('.lastScore').append(`<tr>
											<td class="previous">
												<h5> <span class="car1Color">Car1</span> finished in <span class="car1Color">second</span> place, with a time of <span class="car1Color">${car1Temp}</span> milliseconds!</h5>
											</td>
										</tr>
										<tr>
											<td class="previous">
												<h5> <span class="car2Color">Car2</span> finished in <span class="car2Color">first</span> place, with a time of <span class="car2Color">${car2Temp}</span> milliseconds!</h5>
											</td>
										</tr>`)
			}
			
		}
	});
	
	





});