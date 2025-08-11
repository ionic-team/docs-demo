import { newSpecPage } from 'jest-stencil-runner';
import { AppHome } from './app-home';

describe('app-home', () => {
  it('renders with correct structure', async () => {
    const { root } = await newSpecPage({
      components: [AppHome],
      html: '<app-home></app-home>',
    });

    // Check that the component renders
    expect(root).toBeTruthy();

    // Check for header with title
    const header = root.querySelector('ion-header');
    expect(header).toBeTruthy();
    expect(header).toHaveAttribute('translucent');

    const title = root.querySelector('ion-title');
    expect(title).toBeTruthy();
    expect(title).toEqualText('Ionic Framework');
  });

  it('renders dark mode toggle', async () => {
    const { root } = await newSpecPage({
      components: [AppHome],
      html: '<app-home></app-home>',
    });

    // Check for dark mode toggle
    const toggle = root.querySelector('ion-toggle');
    expect(toggle).toBeTruthy();
    expect(toggle).toEqualText('Dark Mode');

    // Check for moon icon
    const moonIcon = root.querySelector('ion-icon[icon="moon"]');
    expect(moonIcon).toBeTruthy();
    expect(moonIcon).toHaveClasses(['component-icon', 'component-icon-dark']);
  });

  it('renders component list', async () => {
    const { root } = await newSpecPage({
      components: [AppHome],
      html: '<app-home></app-home>',
    });

    // Check for home list
    const homeList = root.querySelector('ion-list.home-list');
    expect(homeList).toBeTruthy();

    // Check that component items are rendered
    const componentItems = root.querySelectorAll('ion-list.home-list ion-item');
    expect(componentItems.length).toBeGreaterThan(0);

    // Check first few components are rendered correctly
    const firstItem = componentItems[0];
    expect(firstItem).toHaveAttribute('href');
    expect(firstItem.querySelector('ion-label')).toEqualText('Accordion');
    expect(firstItem.querySelector('ion-icon')).toHaveClass('component-icon-primary');
  });

  it('generates correct href for regular components', async () => {
    const { root } = await newSpecPage({
      components: [AppHome],
      html: '<app-home></app-home>',
    });

    // Find accordion item (first in the list)
    const accordionItem = root.querySelector('ion-item[href="/component/accordion"]');
    expect(accordionItem).toBeTruthy();

    // Find button item
    const buttonItem = root.querySelector('ion-item[href="/component/button"]');
    expect(buttonItem).toBeTruthy();
  });

  it('generates special href for tabs component', async () => {
    const { root } = await newSpecPage({
      components: [AppHome],
      html: '<app-home></app-home>',
    });

    // Tabs should have special href
    const tabsItem = root.querySelector('ion-item[href="/component/tabs/music"]');
    expect(tabsItem).toBeTruthy();
    expect(tabsItem.querySelector('ion-label')).toEqualText('Tabs');
  });

  it('has correct CSS classes', async () => {
    const { root } = await newSpecPage({
      components: [AppHome],
      html: '<app-home></app-home>',
    });

    // Check theme list class
    const themeList = root.querySelector('ion-list.theme-list');
    expect(themeList).toBeTruthy();
    expect(themeList).toEqualAttribute('lines', 'full');

    // Check home list class
    const homeList = root.querySelector('ion-list.home-list');
    expect(homeList).toBeTruthy();
  });
});
