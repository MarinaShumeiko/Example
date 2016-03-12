'use strict';

angular.module('falconUiTest')
    .controller('EngageCtrl', function($scope) {
        $scope.thread = {
            network: 'facebook',
            channel: 'Falcon Social Europe',
            sender: {
                name: 'John Doe',
                avatar: 'http://fillmurray.com/166/166'
            },
            read: false,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore aut quam quaerat laudantium, quasi odio possimus provident assumenda quod accusamus.',
            comments: [{
                sender: {
                        name: 'Anna Beta',
                        avatar: 'http://fillmurray.com/166/166'
                    },
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate voluptates reprehenderit, hic minima fugiat.',
                read: true,
                replies: [{
                    sender: {
                        name: 'Chris Mis',
                        avatar: 'http://fillmurray.com/165/165'
                    },
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, impedit, porro. Iure ducimus similique sit eligendi rerum dolores ex labore, consequuntur nisi animi atque mollitia quae cupiditate eum repellendus molestias nam. Mollitia hic rerum quaerat accusamus pariatur praesentium ea enim.',
                    read: true
                }, {
                    sender: {
                        name: 'Freda Bulk',
                        avatar: 'http://fillmurray.com/164/164'
                    },
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptate nostrum quo quos eum voluptas nisi eius. Molestiae architecto culpa blanditiis libero pariatur, tempora laboriosam dolor quos? Earum placeat laboriosam laborum, minima fuga sapiente molestiae nesciunt asperiores doloribus inventore deserunt quam ut repellendus iusto nisi at beatae dolor aperiam quos est. Nesciunt inventore, saepe corporis ipsa doloremque qui voluptatem. Ducimus.',
                    read: true
                }, {
                    sender: {
                        name: 'Key Alice',
                        avatar: 'http://fillmurray.com/163/163'
                    },
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore aut quam quaerat laudantium, quasi odio possimus provident assumenda quod accusamus.',
                    read: true
                }]
            }, {
                sender: {
                        name: 'Jay Son',
                        avatar: 'http://fillmurray.com/162/162'
                    },
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, impedit, porro. Iure ducimus similique sit eligendi rerum dolores ex labore, consequuntur nisi animi atque mollitia quae cupiditate eum repellendus molestias nam. Mollitia hic rerum quaerat accusamus pariatur praesentium ea enim.',
                read: false
            }, {
                sender: {
                        name: 'Dena Porter',
                        avatar: 'http://fillmurray.com/161/161'
                    },
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptate nostrum quo quos eum voluptas nisi eius. Molestiae architecto culpa blanditiis libero pariatur, tempora laboriosam dolor quos? Earum placeat laboriosam laborum, minima fuga sapiente molestiae nesciunt asperiores doloribus inventore deserunt quam ut repellendus iusto nisi at beatae dolor aperiam quos est. Nesciunt inventore, saepe corporis ipsa doloremque qui voluptatem. Ducimus.',
                read: false
            }, {
                sender: {
                        name: 'Johnathon Donathon',
                        avatar: 'http://fillmurray.com/160/160'
                    },
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore aut quam quaerat laudantium, quasi odio possimus provident assumenda quod accusamus.',
                read: false
            }, {
                sender: {
                        name: 'Marry Poppins',
                        avatar: 'http://fillmurray.com/159/159'
                    },
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate voluptates reprehenderit, hic minima fugiat.',
                read: false
            }, {
                sender: {
                        name: 'Lara Soft',
                        avatar: 'http://fillmurray.com/158/158'
                    },
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, impedit, porro. Iure ducimus similique sit eligendi rerum dolores ex labore, consequuntur nisi animi atque mollitia quae cupiditate eum repellendus molestias nam. Mollitia hic rerum quaerat accusamus pariatur praesentium ea enim.',
                read: false
            }, {
                sender: {
                        name: 'Don John',
                        avatar: 'http://fillmurray.com/157/157'
                    },
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore aut quam quaerat laudantium, quasi odio possimus provident assumenda quod accusamus.',
                read: false,
                replies: [{
                    sender: {
                        name: 'Hans Zolo',
                        avatar: 'http://fillmurray.com/156/156'
                    },
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, impedit, porro. Iure ducimus similique sit eligendi rerum dolores ex labore, consequuntur nisi animi atque mollitia quae cupiditate eum repellendus molestias nam. Mollitia hic rerum quaerat accusamus pariatur praesentium ea enim.',
                    read: false
                }, {
                    sender: {
                        name: 'Luke Sunwalker',
                        avatar: 'http://fillmurray.com/155/155'
                    },
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptate nostrum quo quos eum voluptas nisi eius. Molestiae architecto culpa blanditiis libero pariatur, tempora laboriosam dolor quos? Earum placeat laboriosam laborum, minima fuga sapiente molestiae nesciunt asperiores doloribus inventore deserunt quam ut repellendus iusto nisi at beatae dolor aperiam quos est. Nesciunt inventore, saepe corporis ipsa doloremque qui voluptatem. Ducimus.',
                    read: false
                }, {
                    sender: {
                        name: 'Alfred Duck',
                        avatar: 'http://fillmurray.com/154/154'
                    },
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore aut quam quaerat laudantium, quasi odio possimus provident assumenda quod accusamus.',
                    read: false
                }]
            }, {
                sender: {
                        name: 'Yuri Motha',
                        avatar: 'http://fillmurray.com/153/153'
                    },
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate voluptates reprehenderit, hic minima fugiat.',
                read: false
            }, {
                sender: {
                        name: 'Sandra Sunshine',
                        avatar: 'http://fillmurray.com/152/152'
                    },
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, impedit, porro. Iure ducimus similique sit eligendi rerum dolores ex labore, consequuntur nisi animi atque mollitia quae cupiditate eum repellendus molestias nam. Mollitia hic rerum quaerat accusamus pariatur praesentium ea enim.',
                read: false
            }, {
                sender: {
                        name: 'Peter Coffin',
                        avatar: 'http://fillmurray.com/151/151'
                    },
                message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptate nostrum quo quos eum voluptas nisi eius. Molestiae architecto culpa blanditiis libero pariatur, tempora laboriosam dolor quos? Earum placeat laboriosam laborum, minima fuga sapiente molestiae nesciunt asperiores doloribus inventore deserunt quam ut repellendus iusto nisi at beatae dolor aperiam quos est. Nesciunt inventore, saepe corporis ipsa doloremque qui voluptatem. Ducimus.',
                read: false
            }]
        };
    });
