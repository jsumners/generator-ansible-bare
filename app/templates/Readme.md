# <%= appname %>

<% if (useEnvironments) { %>
This project uses an environment based layout. You should run playbooks like so:

```bash
$ ansible-playbook -i hosts.dev main.pb.yml
```
<% } else { %>
```bash
$ ansible-playbook main.pb.yml # targets all hosts
$ ansible-playbook main.pb.yml -l somehost # targets only the host "somehost"
$ ansible-playbook main.pb.yml -l a_group # targets hosts in the group "a_group"
```
<% } %>
