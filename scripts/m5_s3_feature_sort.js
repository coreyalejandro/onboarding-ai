        document.addEventListener('DOMContentLoaded', function() {
            // Show feature card first
            setTimeout(() => {
                const featureCard = document.getElementById('featureCard');
                if (featureCard) {
                    featureCard.classList.add('show');
                }
            }, 1000);
            
            // Show all lanes
            setTimeout(() => {
                const lanes = ['designLane', 'buildLane', 'runLane'];
                lanes.forEach((laneId, index) => {
                    setTimeout(() => {
                        const lane = document.getElementById(laneId);
                        if (lane) {
                            lane.classList.add('show');
                        }
                    }, 2000 + (index * 200));
                });
            }, 1500);
            
            // Animate design tasks
            setTimeout(() => {
                const designTasks = ['designTask1', 'designTask2'];
                designTasks.forEach((taskId, index) => {
                    setTimeout(() => {
                        const task = document.getElementById(taskId);
                        if (task) {
                            task.classList.add('show');
                        }
                    }, 3000 + (index * 300));
                });
            }, 2500);
            
            // Animate build tasks
            setTimeout(() => {
                const buildTasks = ['buildTask1', 'buildTask2', 'buildTask3'];
                buildTasks.forEach((taskId, index) => {
                    setTimeout(() => {
                        const task = document.getElementById(taskId);
                        if (task) {
                            task.classList.add('show');
                        }
                    }, 3500 + (index * 300));
                });
            }, 3000);
            
            // Animate run tasks
            setTimeout(() => {
                const runTasks = ['runTask1', 'runTask2', 'runTask3'];
                runTasks.forEach((taskId, index) => {
                    setTimeout(() => {
                        const task = document.getElementById(taskId);
                        if (task) {
                            task.classList.add('show');
                        }
                    }, 4000 + (index * 300));
                });
            }, 3500);
            
            // Show journey summary
            setTimeout(() => {
                const journeySummary = document.getElementById('journeySummary');
                if (journeySummary) {
                    journeySummary.classList.add('show');
                }
            }, 5000);
            
            // Add click interaction to replay animation
            document.addEventListener('click', function() {
                // Reset all elements
                const allElements = document.querySelectorAll('.show');
                allElements.forEach(element => {
                    element.classList.remove('show');
                });
                
                // Restart animation after a brief delay
                setTimeout(() => {
                    // Show feature card first
                    setTimeout(() => {
                        const featureCard = document.getElementById('featureCard');
                        if (featureCard) {
                            featureCard.classList.add('show');
                        }
                    }, 100);
                    
                    // Show all lanes
                    setTimeout(() => {
                        const lanes = ['designLane', 'buildLane', 'runLane'];
                        lanes.forEach((laneId, index) => {
                            setTimeout(() => {
                                const lane = document.getElementById(laneId);
                                if (lane) {
                                    lane.classList.add('show');
                                }
                            }, 1100 + (index * 200));
                        });
                    }, 600);
                    
                    // Animate design tasks
                    setTimeout(() => {
                        const designTasks = ['designTask1', 'designTask2'];
                        designTasks.forEach((taskId, index) => {
                            setTimeout(() => {
                                const task = document.getElementById(taskId);
                                if (task) {
                                    task.classList.add('show');
                                }
                            }, 2100 + (index * 300));
                        });
                    }, 1600);
                    
                    // Animate build tasks
                    setTimeout(() => {
                        const buildTasks = ['buildTask1', 'buildTask2', 'buildTask3'];
                        buildTasks.forEach((taskId, index) => {
                            setTimeout(() => {
                                const task = document.getElementById(taskId);
                                if (task) {
                                    task.classList.add('show');
                                }
                            }, 2600 + (index * 300));
                        });
                    }, 2100);
                    
                    // Animate run tasks
                    setTimeout(() => {
                        const runTasks = ['runTask1', 'runTask2', 'runTask3'];
                        runTasks.forEach((taskId, index) => {
                            setTimeout(() => {
                                const task = document.getElementById(taskId);
                                if (task) {
                                    task.classList.add('show');
                                }
                            }, 3100 + (index * 300));
                        });
                    }, 2600);
                    
                    // Show journey summary
                    setTimeout(() => {
                        const journeySummary = document.getElementById('journeySummary');
                        if (journeySummary) {
                            journeySummary.classList.add('show');
                        }
                    }, 4100);
                }, 200);
            });
        });
