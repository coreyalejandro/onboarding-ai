        document.addEventListener('DOMContentLoaded', function() {
            // Show task cards
            const taskCards = ['task1', 'task2', 'task3', 'task4', 'task5', 'task6'];
            taskCards.forEach((taskId, index) => {
                setTimeout(() => {
                    const task = document.getElementById(taskId);
                    if (task) {
                        task.classList.add('show');
                    }
                }, 1000 + (index * 200));
            });
            
            // Show countdown timer
            setTimeout(() => {
                const countdownTimer = document.getElementById('countdownTimer');
                if (countdownTimer) {
                    countdownTimer.classList.add('show');
                }
            }, 2500);
            
            // Start countdown
            let countdown = 5;
            const timerNumber = document.getElementById('timerNumber');
            const countdownInterval = setInterval(() => {
                countdown--;
                if (timerNumber) {
                    timerNumber.textContent = countdown;
                }
                if (countdown <= 0) {
                    clearInterval(countdownInterval);
                    // Hide countdown and show lanes
                    setTimeout(() => {
                        const countdownTimer = document.getElementById('countdownTimer');
                        if (countdownTimer) {
                            countdownTimer.style.opacity = '0';
                        }
                        
                        // Show lanes
                        const lanes = ['designLane', 'buildLane', 'runLane'];
                        lanes.forEach((laneId, index) => {
                            setTimeout(() => {
                                const lane = document.getElementById(laneId);
                                if (lane) {
                                    lane.classList.add('show');
                                }
                            }, 500 + (index * 200));
                        });
                        
                        // Move tasks to correct lanes
                        setTimeout(() => {
                            moveTaskToLane('task1', 'designContent');
                            moveTaskToLane('task2', 'buildContent');
                            moveTaskToLane('task3', 'runContent');
                            moveTaskToLane('task4', 'designContent');
                            moveTaskToLane('task5', 'buildContent');
                            moveTaskToLane('task6', 'runContent');
                        }, 1500);
                        
                        // Show answers
                        setTimeout(() => {
                            const answersSection = document.getElementById('answersSection');
                            if (answersSection) {
                                answersSection.classList.add('show');
                            }
                        }, 4000);
                    }, 500);
                }
            }, 1000);
            
            function moveTaskToLane(taskId, laneContentId) {
                const task = document.getElementById(taskId);
                const laneContent = document.getElementById(laneContentId);
                
                if (task && laneContent) {
                    // Clone the task
                    const taskClone = task.cloneNode(true);
                    taskClone.classList.add('in-lane');
                    taskClone.style.margin = '0';
                    taskClone.style.width = '100%';
                    
                    // Add to lane
                    laneContent.appendChild(taskClone);
                    
                    // Hide original task
                    task.style.opacity = '0.3';
                }
            }
            
            // Add click interaction to replay animation
            document.addEventListener('click', function() {
                // Reset all elements
                const allElements = document.querySelectorAll('.show');
                allElements.forEach(element => {
                    element.classList.remove('show');
                });
                
                // Reset countdown timer
                const countdownTimer = document.getElementById('countdownTimer');
                if (countdownTimer) {
                    countdownTimer.style.opacity = '1';
                }
                
                // Reset timer number
                if (timerNumber) {
                    timerNumber.textContent = '5';
                }
                
                // Clear any existing tasks in lanes
                const laneContents = ['designContent', 'buildContent', 'runContent'];
                laneContents.forEach(laneContentId => {
                    const laneContent = document.getElementById(laneContentId);
                    if (laneContent) {
                        laneContent.innerHTML = '';
                    }
                });
                
                // Reset task cards
                taskCards.forEach(taskId => {
                    const task = document.getElementById(taskId);
                    if (task) {
                        task.style.opacity = '1';
                    }
                });
                
                // Restart animation after a brief delay
                setTimeout(() => {
                    // Show task cards
                    taskCards.forEach((taskId, index) => {
                        setTimeout(() => {
                            const task = document.getElementById(taskId);
                            if (task) {
                                task.classList.add('show');
                            }
                        }, 100 + (index * 200));
                    });
                    
                    // Show countdown timer
                    setTimeout(() => {
                        const countdownTimer = document.getElementById('countdownTimer');
                        if (countdownTimer) {
                            countdownTimer.classList.add('show');
                        }
                    }, 1600);
                    
                    // Start countdown again
                    let countdown = 5;
                    const countdownInterval = setInterval(() => {
                        countdown--;
                        if (timerNumber) {
                            timerNumber.textContent = countdown;
                        }
                        if (countdown <= 0) {
                            clearInterval(countdownInterval);
                            // Hide countdown and show lanes
                            setTimeout(() => {
                                const countdownTimer = document.getElementById('countdownTimer');
                                if (countdownTimer) {
                                    countdownTimer.style.opacity = '0';
                                }
                                
                                // Show lanes
                                const lanes = ['designLane', 'buildLane', 'runLane'];
                                lanes.forEach((laneId, index) => {
                                    setTimeout(() => {
                                        const lane = document.getElementById(laneId);
                                        if (lane) {
                                            lane.classList.add('show');
                                        }
                                    }, 500 + (index * 200));
                                });
                                
                                // Move tasks to correct lanes
                                setTimeout(() => {
                                    moveTaskToLane('task1', 'designContent');
                                    moveTaskToLane('task2', 'buildContent');
                                    moveTaskToLane('task3', 'runContent');
                                    moveTaskToLane('task4', 'designContent');
                                    moveTaskToLane('task5', 'buildContent');
                                    moveTaskToLane('task6', 'runContent');
                                }, 1500);
                                
                                // Show answers
                                setTimeout(() => {
                                    const answersSection = document.getElementById('answersSection');
                                    if (answersSection) {
                                        answersSection.classList.add('show');
                                    }
                                }, 4000);
                            }, 500);
                        }
                    }, 1000);
                }, 200);
            });
        });
