<template>
<div class="container">

    <div class="row">

        <div class="col-sm-12">
            <h3>Real Time Notifications</h3>
            <p>Use notify route to send notification see routes/web.php</p>
        </div>

        <hr>
        <hr>

        <div class="col-sm-12">
            <h5>System Says: {{ notification }}</h5>
        </div>

    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            notification: "wait..."
        };
    },
    mounted() {
        window.Echo.channel("Notifications").listen("NotificationEvent", event => {
            this.notification = event.notification;
        });
    },
};
</script>
