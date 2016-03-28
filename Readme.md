# generator-ansible-bare

This module provides a [Yeoman][yo] generator for bootstrapping a bare bones
[Ansible][ansible] project.

```bash
$ npm install -g yo
$ npm install -g generator-ansible-bare
$ mkdir your-project && cd your-project
$ yo ansible-bare
```

Note: due to the craptastic templating engine, templated files
(e.g. ansible.cfg) will have unnecessary whitespace included. Attempting to
tell the engine "no, thanks" results in worse files.

[yo]: http://yeoman.io/
[ansible]: http://ansible.com/

## License

[MIT License](http://jsumners.mit-license.org/)
