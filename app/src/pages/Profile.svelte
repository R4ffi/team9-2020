<script>
    import ProfileCard from "../components/ProfileCard.svelte";
    export let userInfo = undefined; // injected on page mount (see App.svelte)
</script>

<div class="row">
    <div class="col-12">
        {#if userInfo}
            <ProfileCard {userInfo} />
        {:else}Sorry, you need to log in first.{/if}
    </div>
</div>
