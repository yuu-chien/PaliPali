<template>
    <div class="container-fluid p-0">
        <header class="banner banner-sm banner--admin">
            <div class="">
                <h1 class="fz-m font-logo color-primary">PALIPALI</h1>
            </div>
        </header>
        <main class="pt-lg pb-lg">
            <div class="container">
                <nav class="backend-nav">
                    <ul class="d-flex">
                        <li class="mr-1 fw-bold">
                            <router-link to="/palipali/admin/products" class="links fz-xs is-active">Products</router-link>
                        </li>
                        <li class="mr-1 fw-bold">
                            <router-link to="" class="links fz-xs">Orders</router-link>
                        </li>
                        <li class="mr-1 fw-bold">
                            <router-link to="" class="links fz-xs">Products</router-link>
                        </li>
                        <li class="mr-1 fw-bold">
                            <router-link to="" class="links fz-xs">Products</router-link>
                        </li>
                    </ul>
                </nav>
                <section>
                    <router-view />
                </section>
            </div>
        </main>
        <footer class="pt-1 pb-1 bgc-basic-w">
            <div class="container d-flex jc-center ai-center">
                <h2 class="mr-3 font-logo">PALIPALI</h2>
                <p class="fz-ets mr-2">Copyright &copy; 2020</p>
                <p class="fz-ets">This Project is for practice, not for commercial use or distribution.</p>
            </div>
        </footer>
    </div>
</template>
