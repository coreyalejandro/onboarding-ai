        document.addEventListener('DOMContentLoaded', function() {
            // Show chaos section first
            setTimeout(() => {
                const chaosSection = document.getElementById('chaosSection');
                if (chaosSection) {
                    chaosSection.classList.add('show');
                }
            }, 1000);
            
            // Animate workflow nodes
            const workflowNodes = ['node1', 'node2', 'node3', 'node4', 'node5'];
            const workflowArrows = ['arrow1', 'arrow2', 'arrow3', 'arrow4'];
            
            workflowNodes.forEach((nodeId, index) => {
                setTimeout(() => {
                    const node = document.getElementById(nodeId);
                    if (node) {
                        node.classList.add('show');
                    }
                }, 1500 + (index * 300));
            });
            
            workflowArrows.forEach((arrowId, index) => {
                setTimeout(() => {
                    const arrow = document.querySelector(`.${arrowId}`);
                    if (arrow) {
                        arrow.classList.add('show');
                    }
                }, 1800 + (index * 300));
            });
            
            // Animate bug notes
            const bugNotes = ['bug1', 'bug2', 'bug3', 'bug4', 'bug5'];
            bugNotes.forEach((bugId, index) => {
                setTimeout(() => {
                    const bug = document.getElementById(bugId);
                    if (bug) {
                        bug.classList.add('show');
                    }
                }, 3500 + (index * 200));
            });
            
            // Show warning overlay briefly
            setTimeout(() => {
                const warningOverlay = document.getElementById('warningOverlay');
                if (warningOverlay) {
                    warningOverlay.classList.add('show');
                }
            }, 5000);
            
            // Hide warning and show blueprint
            setTimeout(() => {
                const warningOverlay = document.getElementById('warningOverlay');
                if (warningOverlay) {
                    warningOverlay.classList.remove('show');
                }
                
                const blueprintSection = document.getElementById('blueprintSection');
                if (blueprintSection) {
                    blueprintSection.classList.add('show');
                }
            }, 7000);
            
            // Animate design components
            const designComponents = ['scope', 'constraints', 'success', 'guardrails'];
            designComponents.forEach((componentId, index) => {
                setTimeout(() => {
                    const component = document.getElementById(componentId);
                    if (component) {
                        component.classList.add('show');
                    }
                }, 7500 + (index * 300));
            });
            
            // Add click interaction to replay animation
            document.addEventListener('click', function() {
                // Reset all elements
                const allElements = document.querySelectorAll('.show');
                allElements.forEach(element => {
                    element.classList.remove('show');
                });
                
                // Restart animation after a brief delay
                setTimeout(() => {
                    // Show chaos section
                    setTimeout(() => {
                        const chaosSection = document.getElementById('chaosSection');
                        if (chaosSection) {
                            chaosSection.classList.add('show');
                        }
                    }, 100);
                    
                    // Animate workflow nodes
                    workflowNodes.forEach((nodeId, index) => {
                        setTimeout(() => {
                            const node = document.getElementById(nodeId);
                            if (node) {
                                node.classList.add('show');
                            }
                        }, 500 + (index * 300));
                    });
                    
                    workflowArrows.forEach((arrowId, index) => {
                        setTimeout(() => {
                            const arrow = document.querySelector(`.${arrowId}`);
                            if (arrow) {
                                arrow.classList.add('show');
                            }
                        }, 800 + (index * 300));
                    });
                    
                    // Animate bug notes
                    bugNotes.forEach((bugId, index) => {
                        setTimeout(() => {
                            const bug = document.getElementById(bugId);
                            if (bug) {
                                bug.classList.add('show');
                            }
                        }, 2500 + (index * 200));
                    });
                    
                    // Show warning overlay briefly
                    setTimeout(() => {
                        const warningOverlay = document.getElementById('warningOverlay');
                        if (warningOverlay) {
                            warningOverlay.classList.add('show');
                        }
                    }, 4000);
                    
                    // Hide warning and show blueprint
                    setTimeout(() => {
                        const warningOverlay = document.getElementById('warningOverlay');
                        if (warningOverlay) {
                            warningOverlay.classList.remove('show');
                        }
                        
                        const blueprintSection = document.getElementById('blueprintSection');
                        if (blueprintSection) {
                            blueprintSection.classList.add('show');
                        }
                    }, 6000);
                    
                    // Animate design components
                    designComponents.forEach((componentId, index) => {
                        setTimeout(() => {
                            const component = document.getElementById(componentId);
                            if (component) {
                                component.classList.add('show');
                            }
                        }, 6500 + (index * 300));
                    });
                }, 200);
            });
        });
