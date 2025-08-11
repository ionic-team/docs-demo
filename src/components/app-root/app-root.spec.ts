import { newSpecPage } from 'jest-stencil-runner';
import { AppRoot } from './app-root';

describe('app-root', () => {
  it('renders with correct structure', async () => {
    const { root } = await newSpecPage({
      components: [AppRoot],
      html: '<app-root></app-root>',
    });

    expect(root).toBeTruthy();

    // Check for ion-app wrapper
    const ionApp = root.querySelector('ion-app');
    expect(ionApp).toBeTruthy();

    // Check for router
    const router = root.querySelector('ion-router');
    expect(router).toBeTruthy();

    // Check for navigation
    const nav = root.querySelector('ion-nav');
    expect(nav).toBeTruthy();
  });

  it('renders home routes', async () => {
    const { root } = await newSpecPage({
      components: [AppRoot],
      html: '<app-root></app-root>',
    });

    // Check home routes exist
    const homeRoute = root.querySelector('ion-route[url="/"][component="app-home"]');
    expect(homeRoute).toBeTruthy();

    const componentRoute = root.querySelector('ion-route[url="/component"][component="app-home"]');
    expect(componentRoute).toBeTruthy();
  });

  it('renders component routes', async () => {
    const { root } = await newSpecPage({
      components: [AppRoot],
      html: '<app-root></app-root>',
    });

    // Check that component routes are generated
    const componentRoutes = root.querySelectorAll('ion-route[url^="/component/"]:not([url="/component"])');
    expect(componentRoutes.length).toBeGreaterThan(0);

    // Check for specific component route
    const accordionRoute = root.querySelector('ion-route[url="/component/accordion"]');
    expect(accordionRoute).toBeTruthy();
    expect(accordionRoute).toEqualAttribute('component', 'component-accordion');
  });

  it('renders tabs routes', async () => {
    const { root } = await newSpecPage({
      components: [AppRoot],
      html: '<app-root></app-root>',
    });

    // Check tabs routes
    const tabsMusicRoute = root.querySelector('ion-route[url="/component/tabs/music"]');
    expect(tabsMusicRoute).toBeTruthy();
    expect(tabsMusicRoute).toEqualAttribute('component', 'tabs-music');

    const tabsMoviesRoute = root.querySelector('ion-route[url="/component/tabs/movies"]');
    expect(tabsMoviesRoute).toBeTruthy();
    expect(tabsMoviesRoute).toEqualAttribute('component', 'tabs-movies');

    const tabsGamesRoute = root.querySelector('ion-route[url="/component/tabs/games"]');
    expect(tabsGamesRoute).toBeTruthy();
    expect(tabsGamesRoute).toEqualAttribute('component', 'tabs-games');
  });
});
